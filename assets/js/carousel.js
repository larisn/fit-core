
const arrows = document.querySelectorAll('.arrow');
const items = document.querySelectorAll('.item');
const circleInsta = document.querySelectorAll('.circle-instagram');
const maxItems = items.length;
let currentItem = 0;

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const isLeft = arrow.classList.contains('arrow-left');
    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }
    // pra não ter o índice maior e nem menor que a quantidade de imagens
    if (currentItem >= maxItems) {
      currentItem = 0;
    }
    if (currentItem < 0) { // começar do último, e quando clicado, volta para 0
      currentItem = maxItems - 1;
    }

    items.forEach(item => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth", // ao clicar, tenta colocar o current item no centro
      block: "nearest" // deixa o slide fixo
    })

    items[currentItem].classList.add('current-item');
  });
});