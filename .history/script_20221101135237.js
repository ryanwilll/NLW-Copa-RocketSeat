let isExplorer = true;

function mudarCartao(event) {
    const cartao = event.currentTarget;
    const backgroundImage = isExplorer ? "url(./assets/bg-ignite.svg)" :

  cartao.style.backgroundImage = "url(./assets/bg-explorer.svg)";
}
