document.addEventListener('click', () => {
  const arrowElement = document.querySelector('#arrow');

  arrowElement.classList.remove('arrow');

  setTimeout(() => {
    arrowElement.classList.add('arrow');
  }, 100);
});
