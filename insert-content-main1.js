document.addEventListener("DOMContentLoaded", function() {
    inserirImagensMain1();
    inserirTextoMain1();
});

function inserirImagensMain1() {
    const pictureDivs = document.querySelectorAll('.pictures-divs');
    const fotosArray = [
        apresentcao.fotoApresentacao1,
        apresentcao.fotoApresentacao2, 
        apresentcao.fotoApresentacao3, 

    ]

    for (let i = 0; i < pictureDivs.length; i++) {
        pictureDivs[i].style.backgroundImage = 'url(' + fotosArray[i] + ')';
    }

}

function inserirTextoMain1() {
    const main1H2 = document.getElementById('h2Apresentacao');
    main1H2.textContent = apresentcao.h2Apresentcao; 

    const arrayH3Main1 = [
        apresentcao.h3Apresentcao1,
        apresentcao.h3Apresentcao2,
        apresentcao.h3Apresentcao3,
    ]
    const h3Main1 = document.querySelectorAll('.main1-h3');
    for (let i = 0; i < h3Main1.length; i++) {
        h3Main1[i].textContent = arrayH3Main1[i];
    }

    const main1Texto = document.getElementById('apresentacao-texto');
    main1Texto.textContent = apresentcao.texto;
}