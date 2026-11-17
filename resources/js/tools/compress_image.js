import JSZip from 'jszip';
import { bindDropzone, createButton, downloadBlob, formatBytes, sanitizeFilename, setStatus } from './shared.js';

const MAX_FILES = 30;
const MAX_FILE_BYTES = 25 * 1024 * 1024;
const MAX_TOTAL_BYTES = 300 * 1024 * 1024;
const MAX_DIMENSION_LIMIT = 10000;
const MAX_OUTPUT_PIXELS = 40_000_000;
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const EXTENSIONS = {
    jpeg: 'jpg',
    webp: 'webp',
    png: 'png',
};

export function init() {
    const root = document.querySelector('[data-tool="compress-image"]');

    if (!root) {
        return;
    }

    const input = root.querySelector('#ci-input');
    const dropzone = root.querySelector('#ci-dropzone');
    const list = root.querySelector('#ci-list');
    const empty = root.querySelector('#ci-empty');
    const status = root.querySelector('#ci-status');
    const summary = root.querySelector('#ci-summary');
    const submit = root.querySelector('#ci-submit');
    const clear = root.querySelector('#ci-clear');
    const downloadAll = root.querySelector('#ci-download-all');
    const qualityInput = root.querySelector('#ci-quality');
    const qualityValue = root.querySelector('#ci-quality-value');
    const maxDimensionInput = root.querySelector('#ci-max-dimension');
    const formatSelect = root.querySelector('#ci-format');

    const items = [];
    let busy = false;

    function options() {
        const quality = Math.min(100, Math.max(10, Number(qualityInput?.value) || 80));
        const maxDimension = Math.min(
            MAX_DIMENSION_LIMIT,
            Math.max(0, Math.floor(Number(maxDimensionInput?.value) || 0))
        );
        const format = ['jpeg', 'webp', 'png'].includes(formatSelect?.value)
            ? formatSelect.value
            : 'jpeg';

        return { quality: quality / 100, maxDimension, format };
    }

    function totalSize(filter) {
        return items.reduce((sum, item) => {
            if (filter === 'original') {
                return sum + item.size;
            }

            if (filter === 'result') {
                return sum + (item.resultSize || 0);
            }

            return sum;
        }, 0);
    }

    function render() {
        if (!list || !empty) {
            return;
        }

        list.replaceChildren();
        empty.classList.toggle('hidden', items.length > 0);

        const buttonClass = 'h-8 w-8 border border-slate-200 dark:border-slate-700 text-xs font-bold text-subtext transition-colors hover:border-[#0096c7] hover:text-[#0096c7] disabled:cursor-not-allowed disabled:opacity-40';

        items.forEach((item, index) => {
            const row = document.createElement('li');
            row.className = 'flex items-center gap-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131924] p-3';

            const thumb = document.createElement('img');
            thumb.src = item.previewUrl;
            thumb.alt = '';
            thumb.width = 48;
            thumb.height = 48;
            thumb.className = 'h-12 w-12 shrink-0 border border-slate-200 object-cover dark:border-slate-700';

            const info = document.createElement('div');
            info.className = 'min-w-0 flex-1';

            const name = document.createElement('p');
            name.className = 'truncate text-sm font-semibold text-heading';
            name.textContent = item.name;

            const meta = document.createElement('p');
            meta.className = 'mt-0.5 text-[11px] font-mono text-subtext';

            if (item.status === 'done') {
                const saved = item.size - (item.resultSize || 0);
                const percent = item.size > 0 ? Math.round((saved / item.size) * 100) : 0;
                meta.textContent = `${formatBytes(item.size)} → ${formatBytes(item.resultSize)} (${percent > 0 ? `-${percent}%` : 'tidak mengecil'}) · ${item.width}×${item.height}`;
            } else if (item.status === 'processing') {
                meta.textContent = `${formatBytes(item.size)} · memproses…`;
            } else if (item.status === 'error') {
                meta.textContent = item.error || 'Gagal memproses.';
            } else {
                meta.textContent = `${formatBytes(item.size)} · siap dikompres`;
            }

            info.append(name, meta);

            const actions = document.createElement('div');
            actions.className = 'flex shrink-0 items-center gap-1';

            if (item.status === 'done' && item.resultBlob) {
                const download = createButton('↓', `Unduh ${item.name}`, buttonClass);
                download.addEventListener('click', () => {
                    downloadBlob(item.resultBlob, outputName(item));
                });
                actions.appendChild(download);
            }

            const remove = createButton('✕', 'Hapus gambar', buttonClass);
            remove.disabled = busy;
            remove.addEventListener('click', () => {
                URL.revokeObjectURL(item.previewUrl);
                items.splice(index, 1);
                render();
            });

            actions.appendChild(remove);
            row.append(thumb, info, actions);
            list.appendChild(row);
        });

        const done = items.filter((item) => item.status === 'done');

        if (summary) {
            if (!items.length) {
                summary.textContent = 'Belum ada gambar.';
            } else if (done.length) {
                summary.textContent = `${items.length} gambar · ${formatBytes(totalSize('original'))} → ${formatBytes(totalSize('result'))}`;
            } else {
                summary.textContent = `${items.length} gambar · ${formatBytes(totalSize('original'))}`;
            }
        }

        if (submit) {
            submit.disabled = busy || items.length === 0;
            submit.textContent = busy ? 'Mengompres…' : 'Kompres semua';
        }

        if (clear) {
            clear.disabled = busy || items.length === 0;
        }

        if (downloadAll) {
            downloadAll.disabled = busy || done.length === 0;
        }
    }

    function outputName(item) {
        const format = item.outputFormat || options().format;
        const base = item.name.replace(/\.[^.]+$/, '');
        return sanitizeFilename(`${base}-compressed.${EXTENSIONS[format] || 'jpg'}`, `image.${EXTENSIONS[format] || 'jpg'}`);
    }

    function addFiles(fileList) {
        if (busy) {
            return;
        }

        const errors = [];

        for (const file of Array.from(fileList)) {
            if (items.length >= MAX_FILES) {
                errors.push(`Maksimal ${MAX_FILES} gambar per sesi.`);
                break;
            }

            if (!ACCEPTED_TYPES.includes(file.type)) {
                errors.push(`${file.name}: format harus JPG, PNG, atau WebP.`);
                continue;
            }

            if (file.size === 0) {
                errors.push(`${file.name}: file kosong.`);
                continue;
            }

            if (file.size > MAX_FILE_BYTES) {
                errors.push(`${file.name}: melebihi batas ${formatBytes(MAX_FILE_BYTES)}.`);
                continue;
            }

            if (totalSize('original') + file.size > MAX_TOTAL_BYTES) {
                errors.push(`Total gambar melebihi batas ${formatBytes(MAX_TOTAL_BYTES)}.`);
                break;
            }

            items.push({
                name: file.name,
                size: file.size,
                file,
                previewUrl: URL.createObjectURL(file),
                status: 'idle',
                outputFormat: null,
                resultBlob: null,
                resultSize: 0,
                width: 0,
                height: 0,
                error: null,
            });
        }

        render();

        if (errors.length) {
            setStatus(status, errors.join(' '), 'error');
        } else {
            setStatus(status, '', 'info');
        }
    }

    async function compressItem(item, opts) {
        let bitmap;

        try {
            bitmap = await createImageBitmap(item.file, { imageOrientation: 'from-image' });
        } catch (error) {
            bitmap = await createImageBitmap(item.file);
        }

        const sourceWidth = bitmap.width;
        const sourceHeight = bitmap.height;
        let width = sourceWidth;
        let height = sourceHeight;

        if (opts.maxDimension > 0 && Math.max(sourceWidth, sourceHeight) > opts.maxDimension) {
            const scale = opts.maxDimension / Math.max(sourceWidth, sourceHeight);
            width = Math.max(1, Math.round(sourceWidth * scale));
            height = Math.max(1, Math.round(sourceHeight * scale));
        }

        if (width * height > MAX_OUTPUT_PIXELS) {
            const scale = Math.sqrt(MAX_OUTPUT_PIXELS / (width * height));
            width = Math.max(1, Math.floor(width * scale));
            height = Math.max(1, Math.floor(height * scale));
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext('2d');

        if (!context) {
            throw new Error('Canvas tidak tersedia di browser ini.');
        }

        if (opts.format === 'jpeg') {
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, width, height);
        }

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(bitmap, 0, 0, width, height);

        if (typeof bitmap.close === 'function') {
            bitmap.close();
        }

        const blob = await new Promise((resolve) => {
            canvas.toBlob(resolve, `image/${opts.format}`, opts.quality);
        });

        if (!blob) {
            throw new Error('Browser gagal meng-encode gambar. Coba format lain.');
        }

        return { blob, width, height };
    }

    async function run() {
        if (busy || items.length === 0) {
            return;
        }

        const opts = options();
        busy = true;
        setStatus(status, '', 'info');
        render();

        try {
            for (const item of items) {
                item.status = 'processing';
                render();

                try {
                    const result = await compressItem(item, opts);
                    item.outputFormat = opts.format;
                    item.resultBlob = result.blob;
                    item.resultSize = result.blob.size;
                    item.width = result.width;
                    item.height = result.height;
                    item.status = 'done';
                } catch (error) {
                    console.error(error);
                    item.status = 'error';
                    item.error = error instanceof Error ? error.message : 'Gagal memproses.';
                }

                render();
            }

            const done = items.filter((item) => item.status === 'done').length;
            const failed = items.filter((item) => item.status === 'error').length;

            if (done) {
                setStatus(
                    status,
                    `Selesai: ${done} gambar dikompres${failed ? `, ${failed} gagal` : ''}.`,
                    failed ? 'warning' : 'success'
                );
            } else {
                setStatus(status, 'Semua gambar gagal diproses. Coba format atau file lain.', 'error');
            }
        } finally {
            busy = false;
            render();
        }
    }

    async function downloadZip() {
        const done = items.filter((item) => item.status === 'done' && item.resultBlob);

        if (done.length === 0) {
            setStatus(status, 'Belum ada hasil untuk diunduh.', 'error');
            return;
        }

        downloadAll.disabled = true;

        try {
            const zip = new JSZip();
            const used = new Set();

            done.forEach((item) => {
                let name = outputName(item);
                let counter = 2;

                while (used.has(name)) {
                    name = name.replace(/(\.[^.]+)$/, `-${counter}$1`);
                    counter += 1;
                }

                used.add(name);
                zip.file(name, item.resultBlob);
            });

            const blob = await zip.generateAsync({ type: 'blob' });
            downloadBlob(blob, 'compressed-images.zip');
            setStatus(status, `ZIP berisi ${done.length} gambar berhasil dibuat.`, 'success');
        } catch (error) {
            console.error(error);
            setStatus(status, 'Gagal membuat ZIP. Coba unduh satu per satu.', 'error');
        } finally {
            downloadAll.disabled = false;
            render();
        }
    }

    if (dropzone && input) {
        bindDropzone(dropzone, input, addFiles);
    }

    qualityInput?.addEventListener('input', () => {
        if (qualityValue) {
            qualityValue.textContent = `${qualityInput.value}%`;
        }
    });

    submit?.addEventListener('click', run);
    downloadAll?.addEventListener('click', downloadZip);

    clear?.addEventListener('click', () => {
        items.forEach((item) => URL.revokeObjectURL(item.previewUrl));
        items.splice(0, items.length);
        setStatus(status, '', 'info');
        render();
    });

    render();
}
