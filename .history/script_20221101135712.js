let isExplorer = true;

function mudarCartao(event) {
  const cartao = event.currentTarget;
  const background = isExplorer
    ? "url(./assets/bg-ignite.svg)"
    : "url(./assets/bg-explorer.svg)";
  isExplorer = !isExplorer;
  cartao.style.backgroundImage = "url(./assets/bg-explorer.svg)";
}
