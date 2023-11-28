let parola = prompt("Inserisci una parola:");

function invertiParola(testo) {
    return testo.split('').reverse().join('');
}

function Palindroma(parola) {
    let parolaInvertita = invertiParola(parola);
    return parola === parolaInvertita;
}

if (Palindroma(parola)) {
    console.log(`${parola} è una parola palindroma.`);
} else {
    console.log(`${parola} non è una parola palindroma.`);
}