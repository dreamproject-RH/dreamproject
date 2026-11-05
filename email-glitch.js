const emailGlitchCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&/<>';

document.querySelectorAll('a[href^="mailto:"], a[data-email-glitch]').forEach((link) => {
  const originalText = link.textContent.trim();

  if (!originalText.includes('@') && !link.hasAttribute('data-email-glitch')) {
    return;
  }

  link.classList.add('email-glitch');
  link.dataset.text = originalText;
  link.setAttribute('aria-label', originalText);

  let interval;

  const resetText = () => {
    clearInterval(interval);
    interval = undefined;
    link.textContent = originalText;
    link.dataset.text = originalText;
  };

  const startAnimation = () => {
    resetText();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    interval = setInterval(() => {
      const text = [...originalText]
        .map((character) => {
          return /[a-z0-9]/i.test(character)
            ? emailGlitchCharacters[Math.floor(Math.random() * emailGlitchCharacters.length)]
            : character;
        })
        .join('');

      link.textContent = text;
      link.dataset.text = text;
    }, 40);
  };

  link.addEventListener('pointerenter', startAnimation);
  link.addEventListener('pointerleave', resetText);
  link.addEventListener('blur', resetText);
  link.addEventListener('focus', startAnimation);
});

const scrambleStorageKey = 'dreamproject-text-scrambled';
const isStaffSignInPage = /(?:^|\/)staffsignin\.html$/i.test(window.location.pathname);

if (!isStaffSignInPage) {
  const originalText = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let textNode;

  while ((textNode = walker.nextNode())) {
    const parent = textNode.parentElement;

    if (
      parent &&
      !parent.closest(
        'button, script, style, noscript, textarea, input, select, option, .email-glitch, [contenteditable="true"]'
      )
    ) {
      originalText.set(textNode, textNode.nodeValue);
    }
  }

  const jumble = (text) =>
    text.replace(/[A-Za-z0-9]+/g, (word) => {
      const characters = [...word];

      for (let index = characters.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [characters[index], characters[swapIndex]] = [characters[swapIndex], characters[index]];
      }

      if (characters.join('') === word && characters.length > 1) {
        characters.push(characters.shift());
      }

      return characters.join('');
    });

  const setScrambled = (scrambled) => {
    originalText.forEach((text, node) => {
      node.nodeValue = scrambled ? jumble(text) : text;
    });

    document.querySelector('#scramble-pages')?.setAttribute('aria-pressed', String(scrambled));
    document.querySelector('#restore-pages')?.setAttribute('aria-pressed', String(!scrambled));
    localStorage.setItem(scrambleStorageKey, String(scrambled));
  };

  if (localStorage.getItem(scrambleStorageKey) === 'true') {
    setScrambled(true);
  }

  document.querySelector('#scramble-pages')?.addEventListener('click', () => setScrambled(true));
  document.querySelector('#restore-pages')?.addEventListener('click', () => setScrambled(false));
}
