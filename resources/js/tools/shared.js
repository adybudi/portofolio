const UNITS = ['B', 'KB', 'MB', 'GB'];

export function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) {
        return '0 B';
    }

    let value = bytes;
    let unit = 0;

    while (value >= 1024 && unit < UNITS.length - 1) {
        value /= 1024;
        unit += 1;
    }

    const digits = value >= 100 ? 0 : value >= 10 ? 1 : 2;

    return `${value.toFixed(digits)} ${UNITS[unit]}`;
}

export function sanitizeFilename(name, fallback = 'file') {
    const cleaned = String(name || '')
        .replace(/[\u0000-\u001f]/g, '')
        .replace(/[\\/:*?"<>|]/g, '_')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 120);

    return cleaned || fallback;
}

export function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = sanitizeFilename(filename);
    anchor.rel = 'noopener';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    window.setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export function setStatus(node, message, state = 'info') {
    if (!node) {
        return;
    }

    node.textContent = message || '';
    node.dataset.state = state;
}

export function bindDropzone(zone, input, onFiles) {
    if (!zone || !input) {
        return;
    }

    const openPicker = () => input.click();

    zone.addEventListener('click', (event) => {
        if (event.target !== input) {
            openPicker();
        }
    });

    zone.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openPicker();
        }
    });

    ['dragenter', 'dragover'].forEach((type) => {
        zone.addEventListener(type, (event) => {
            event.preventDefault();
            event.stopPropagation();
            zone.classList.add('is-dragging');
        });
    });

    ['dragleave', 'drop'].forEach((type) => {
        zone.addEventListener(type, (event) => {
            event.preventDefault();
            event.stopPropagation();
            zone.classList.remove('is-dragging');
        });
    });

    zone.addEventListener('drop', (event) => {
        const files = event.dataTransfer?.files;

        if (files && files.length) {
            onFiles(files);
        }
    });

    input.addEventListener('change', () => {
        if (input.files && input.files.length) {
            onFiles(input.files);
        }

        input.value = '';
    });
}

export function createButton(label, ariaLabel, extraClasses) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.setAttribute('aria-label', ariaLabel);
    button.className = extraClasses;

    return button;
}
