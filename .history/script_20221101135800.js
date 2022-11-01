let isExplorer = true;

function mudarCartao(event) {
  const cartao = event.currentTarget;
  const backgroundAtual = isExplorer
    ? "ignite)"
    : "url(./assets/bg-explorer.svg)";
  isExplorer = !isExplorer;
  cartao.style.backgroundImage = `url(./assets/bg-${backgroundAtual}.svg)`;
}
