function aparecerCardUm() {
    let cardContent = this.parentElement.querySelector('.content');
    let cardContentDois = this.parentElement.nextElementSibling.querySelector('.content-dois');

    if (cardContent.style.display == "none" || cardContent.style.display === "") {
        cardContent.style.display = "block";
        cardContentDois.style.display = "none"; // Oculta o outro card
    } else {
        cardContent.style.display = "none";
    }
}

function aparecerCardDois() {
    let cardContentDois = this.parentElement.querySelector('.content-dois');
    let cardContent = this.parentElement.previousElementSibling.querySelector('.content');

    if (cardContentDois.style.display == "none" || cardContentDois.style.display === "") {
        cardContentDois.style.display = "block";
        cardContent.style.display = "none"; // Oculta o outro card
    } else {
        cardContentDois.style.display = "none";
    }
}
// Adiciona os event listeners para os elementos h3 correspondentes
document.querySelector('.secao4-div-card:nth-child(1) img').addEventListener('click', aparecerCardUm);
document.querySelector('.secao4-div-card-dois:nth-child(2) img').addEventListener('click', aparecerCardDois);
