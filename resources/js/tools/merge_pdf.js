import { PDFDocument } from 'pdf-lib';
import { bindDropzone, createButton, formatBytes, setStatus } from './shared.js';

const MAX_FILES = 50;
const MAX_FILE_BYTES = 100 * 1024 * 1024;
const MAX_TOTAL_BYTES = 250 * 1024 * 1024;

export function init() {
    const root = document.querySelector('[data-tool="merge-pdf"]');

    if (!root) {
        return;
    }

    const input = root.querySelector('#merge-pdf-input');
    const dropzone = root.querySelector('#merge-pdf-dropzone');
    const list = root.querySelector('#merge-pdf-list');
    const empty = root.querySelector('#merge-pdf-empty');
    const status = root.querySelector('#merge-pdf-status');
    const summary = root.querySelector('#merge-pdf-summary');
    const submit = root.querySelector('#merge-pdf-submit');
    const clear = root.querySelector('#merge-pdf-clear');
    const result = root.querySelector('#merge-pdf-result');
    const resultMeta = root.querySelector('#merge-pdf-result-meta');
    const resultDownload = root.querySelector('#merge-pdf-download');

    const items = [];
    let resultUrl = null;
    let busy = false;

    function totalBytes() {
        return items.reduce((sum, item) => sum + item.size, 0);
    }

    function totalPages() {
        return items.reduce((sum, item) => sum + item.pages, 0);
    }

    function resetResult() {
        if (resultUrl) {
            URL.revokeObjectURL(resultUrl);
            resultUrl = null;
        }

        if (result) {
            result.classList.add('hidden');
        }

        if (resultDownload) {
            resultDownload.removeAttribute('href');
        }
    }

    function render() {
        if (!list || !empty) {
            return;
        }

        list.replaceChildren();
        empty.classList.toggle('hidden', items.length > 0);

        items.forEach((item, index) => {
            const row = document.createElement('li');
            row.className = 'flex items-center gap-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131924] p-3';

            const info = document.createElement('div');
            info.className = 'min-w-0 flex-1';

            const name = document.createElement('p');
            name.className = 'truncate text-sm font-semibold text-heading';
            name.textContent = item.name;

            const meta = document.createElement('p');
            meta.className = 'mt-0.5 text-[11px] font-mono text-subtext';
            meta.textContent = `${item.pages} halaman · ${formatBytes(item.size)}`;

            info.append(name, meta);

            const actions = document.createElement('div');
            actions.className = 'flex shrink-0 items-center gap-1';

            const buttonClass = 'h-8 w-8 border border-slate-200 dark:border-slate-700 text-xs font-bold text-subtext transition-colors hover:border-[#0096c7] hover:text-[#0096c7] disabled:cursor-not-allowed disabled:opacity-40';

            const up = createButton('↑', 'Naikkan urutan', buttonClass);
            up.disabled = index === 0 || busy;
            up.addEventListener('click', () => move(index, -1));

            const down = createButton('↓', 'Turunkan urutan', buttonClass);
            down.disabled = index === items.length - 1 || busy;
            down.addEventListener('click', () => move(index, 1));

            const remove = createButton('✕', 'Hapus file', buttonClass);
            remove.disabled = busy;
            remove.addEventListener('click', () => {
                items.splice(index, 1);
                resetResult();
                render();
            });

            actions.append(up, down, remove);
            row.append(info, actions);
            list.appendChild(row);
        });

        if (summary) {
            summary.textContent = items.length
                ? `${items.length} file · ${totalPages()} halaman · ${formatBytes(totalBytes())}`
                : 'Belum ada file.';
        }

        if (submit) {
            submit.disabled = busy || items.length === 0;
        }

        if (clear) {
            clear.disabled = busy || items.length === 0;
        }
    }

    function move(index, direction) {
        const target = index + direction;

        if (target < 0 || target >= items.length) {
            return;
        }

        const [item] = items.splice(index, 1);
        items.splice(target, 0, item);
        resetResult();
        render();
    }

    async function addFiles(fileList) {
        if (busy) {
            return;
        }

        const errors = [];

        for (const file of Array.from(fileList)) {
            if (items.length >= MAX_FILES) {
                errors.push(`Maksimal ${MAX_FILES} file per penggabungan.`);
                break;
            }

            const isPdf = file.type === 'application/pdf' || /\.pdf$/i.test(file.name);

            if (!isPdf) {
                errors.push(`${file.name}: bukan file PDF.`);
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

            if (totalBytes() + file.size > MAX_TOTAL_BYTES) {
                errors.push(`Total file melebihi batas ${formatBytes(MAX_TOTAL_BYTES)}.`);
                break;
            }

            try {
                const bytes = await file.arrayBuffer();
                const document = await PDFDocument.load(bytes, { ignoreEncryption: false });

                items.push({
                    name: file.name,
                    size: file.size,
                    pages: document.getPageCount(),
                    bytes,
                });
            } catch (error) {
                errors.push(`${file.name}: PDF tidak valid atau terenkripsi.`);
            }
        }

        resetResult();
        render();

        if (errors.length) {
            setStatus(status, errors.join(' '), 'error');
        } else {
            setStatus(status, '', 'info');
        }
    }

    function setBusy(value) {
        busy = value;

        if (submit) {
            submit.disabled = value || items.length === 0;
            submit.textContent = value ? 'Menggabungkan…' : 'Gabungkan PDF';
        }

        render();
    }

    async function merge() {
        if (busy || items.length === 0) {
            return;
        }

        setStatus(status, '', 'info');
        setBusy(true);

        try {
            const merged = await PDFDocument.create();

            for (const item of items) {
                const source = await PDFDocument.load(item.bytes, { ignoreEncryption: false });
                const pages = await merged.copyPages(source, source.getPageIndices());

                pages.forEach((page) => merged.addPage(page));
            }

            const bytes = await merged.save();
            const blob = new Blob([bytes], { type: 'application/pdf' });
            const filename = `merged-${new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-')}.pdf`;

            resultUrl = URL.createObjectURL(blob);

            if (result && resultMeta && resultDownload) {
                resultMeta.textContent = `${filename} · ${formatBytes(blob.size)}`;
                resultDownload.href = resultUrl;
                resultDownload.download = filename;
                result.classList.remove('hidden');
            }

            setStatus(status, `Berhasil menggabungkan ${items.length} file (${totalPages()} halaman).`, 'success');
        } catch (error) {
            console.error(error);
            setStatus(status, 'Gagal menggabungkan PDF. Pastikan semua file valid dan tidak terenkripsi.', 'error');
        } finally {
            setBusy(false);
        }
    }

    if (dropzone && input) {
        bindDropzone(dropzone, input, addFiles);
    }

    submit?.addEventListener('click', merge);

    clear?.addEventListener('click', () => {
        items.splice(0, items.length);
        resetResult();
        setStatus(status, '', 'info');
        render();
    });

    render();
}
