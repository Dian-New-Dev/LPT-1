document.addEventListener("DOMContentLoaded", function() {
    inserirImagemMain2();
    inserirTextoMain2();
});

function inserirImagemMain2() {
    const main2Img = document.getElementById('main2-img');
    main2Img.style.backgroundImage = 'url(' + servicos.imagem + ')';
}

function inserirTextoMain2() {
    const main2H3 = document.getElementById('main2-h3');
    main2H3.textContent = servicos.h3;

    const main2H2 = document.getElementById('main2-h2');
    main2H2.textContent = servicos.h2;

    const main2P = document.getElementById('main2-p');
    main2P.textContent = servicos.p;
}