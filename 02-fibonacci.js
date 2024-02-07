const prompt = require('prompt-sync')();

function Fibonacci(numero) {
    let a = 0, b = 1;
    while (a <= numero) {
        if (a === numero) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

// Número a ser verificado se pertence à sequência de Fibonacci
let numero = parseInt(prompt("Informe um número:"));

if (Fibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
