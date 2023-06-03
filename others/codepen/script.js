function initEditors () {
  const editors = document.querySelectorAll('.editor');

  for (let i = 0; i < editors.length; i++) {
    spawn(editors[i]);
  }

  function spawn (editor) {
    const codesByLang = {
      html: '',
      css: '',
      js: '',
    };
    const frame = editor.querySelector('.editor-sandbox');
    const codes = editor.querySelectorAll('[data-lang]');

    for (let i = 0; i < codes.length; i++) {
      const lang = codes[i].dataset.lang;

      codesByLang[lang] = codes[i].value;
      codes[i].addEventListener('keyup', e => {
        const lang = e.target.dataset.lang;

        codesByLang[lang] = e.target.value;
        update(codesByLang, frame);
      });

      update(codesByLang, frame);
    }
  }

  function update (codesByLang, frame) {
    const html = `<!DOCTYPE html><html><head><style>${codesByLang.css}</style></head><body>${codesByLang.html}<script>${codesByLang.js}</script></body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    frame.src = URL.createObjectURL(blob);
  }
}

initEditors();
