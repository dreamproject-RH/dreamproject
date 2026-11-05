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
