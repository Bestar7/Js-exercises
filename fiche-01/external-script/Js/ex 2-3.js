"use strict";
let btn;
let compteur = 0;
let horloge;
let msg = "Click me !";

function init(){
    btn = document.querySelector("button");
    btn.addEventListener("click", click);
    setHorloge();
}

function setHorloge(){
    horloge = document.querySelector("button");
    horloge.addEventListener();
    window.setInterval(horloge.innerHTML)
}

function click(){
    compteur++;
    if (compteur>=5)
        msg = "Bravo, bel échauffement !";
    if (compteur>=10)
        msg = "Vous êtes passé maître en l’art du clic !";
    btn.innerText = msg + " " + compteur;
}