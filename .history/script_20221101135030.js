let isExplorer = true;

function mudarCartao(event) {
    const cartao = event.currentTarget;
    const backgroundImage = isExplorer ? "url"

  cartao.style.backgroundImage = "url(./assets/bg-ignite.svg)";
}