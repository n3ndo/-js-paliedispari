let pariDispari = prompt("Scegli pari o dispari:");
let numUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));
let numComputer = numeroRandom();
let somma = numUtente + numComputer;
let sommaPari = pari(somma);

if ((pariDispari === "pari" && sommaPari) || (pariDispari === "dispari" && !sommaPari)) {
    console.log("Hai vinto! Giochiamo ancora!!");
}
else {
    console.log("Hai perso :(! Ritenta sarai più fortunato");
}
// Funzioni:
function numeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}
function pari(numero) {
    return numero % 2 === 0;
}
