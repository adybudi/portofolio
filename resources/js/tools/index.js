const root = document.querySelector('[data-tool]');
const tool = root?.dataset.tool;

if (tool === 'merge-pdf') {
    import('./merge_pdf.js').then((module) => module.init());
} else if (tool === 'compress-image') {
    import('./compress_image.js').then((module) => module.init());
}
