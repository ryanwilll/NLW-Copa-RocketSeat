let isExplorer = true;

function mudarCartao(event) {
  const cartao = event.currentTarget;
  const backgroundAtual = isExplorer ? "ignite" : "explorer";

  isExplorer = !isExplorer;
  cartao.style.backgroundImage = `url(./assets/bg-${backgroundAtual}.svg)`;
  cartao.style.rotate
}
