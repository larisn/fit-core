
// interage apenas depois que o conteúdo da página for carregado
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("back-to-top");

  // quando o usuário rolar para baixo 20px a partir do topo da página, mostra o botão
  window.addEventListener("scroll", () => {
    scrollFunction();
  });

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  // quando o usuário clicar, rolar para o topo
  button.addEventListener("click", () => {
    backToTop();
  });

  const backToTop = () => {
    // define a posição de rolagem vertical da página no topo
    document.documentElement.scrollTop = 0;
  };
});
