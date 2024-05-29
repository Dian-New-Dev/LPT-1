document.addEventListener("DOMContentLoaded", function() {
    // inserirImagemMain3();
    inserirTextoMain3();
    inserirTextoMain3Rotativo();
});

function inserirTextoMain3() {
    const main3H3 = document.getElementById('main3-h3');
    main3H3.textContent = reviews.h3;

    const main3H2 = document.getElementById('main3-h2');
    main3H2.textContent = reviews.h2;
}

const review = [
    [reviews.foto1, reviews.nome1, reviews.cargo1, reviews.text1],
    [reviews.foto2, reviews.nome2, reviews.cargo2, reviews.text2],
    [reviews.foto3, reviews.nome3, reviews.cargo3, reviews.text3]
]

const main3Img = document.getElementById('main3-img');
const main3Nome = document.getElementById('main3-nome');
const main3Cargo = document.getElementById('main3-cargo');
const main3P = document.getElementById('main3-p');



function inserirTextoMain3Rotativo() {
    let currentIndex = 0;
    
    function updateMain3Content() {
        if (currentIndex < review.length) {
            main3Img.src = review[currentIndex][0];
            main3Nome.textContent = review[currentIndex][1];
            main3Cargo.textContent = review[currentIndex][2];
            main3P.textContent = review[currentIndex][3];
            currentIndex++;
        } else {
            currentIndex = 0; // Reset index to loop the reviews again
        }
    }
    
    // Initial call to update content immediately
    updateMain3Content();
    
    // Set interval to update content every 5 seconds
    setInterval(updateMain3Content, 5000);
}
