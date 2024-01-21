// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

let num = parseInt(prompt('Informe um número: '));

function parImpar(num) {
    if(num % 2 == 0) {
        console.log('O número é par');
    } else {
        console.log('O número é impar');
    }
}

parImpar(num);