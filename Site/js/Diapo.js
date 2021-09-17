// Variables globales
let compteur = 0;
let elements, intervalle;

window.onload = function(){
    // Le document est chargé
    elements = document.querySelector(".elements");
    
    let flecheDroite = document.querySelector("#droite");
    flecheDroite.addEventListener("click", suivant);
    let flecheGauche = document.querySelector("#gauche");
    flecheGauche.addEventListener("click", precedent);
    intervalle = setInterval(suivant, 3000);

    let diapo = document.querySelector(".diapo");
    diapo.addEventListener("mouseover", stopTimer);
    diapo.addEventListener("mouseout", startTimer);

}

function suivant(){
    // On incrémente le compteur
    compteur++;

    if(compteur === elements.childElementCount){
        compteur = 0;
    }
    let pourcents = compteur * 100;
    elements.style.transform = `translateX(-${pourcents}%)`;
}

function precedent(){
    compteur--;

    if(compteur < 0){
        compteur = elements.childElementCount - 1;
    }
    let pourcents = compteur * 100;
    elements.style.transform = `translateX(-${pourcents}%)`;
}

function stopTimer(){
    clearInterval(intervalle);
}

function startTimer(){
    intervalle = setInterval(suivant, 3000);

}