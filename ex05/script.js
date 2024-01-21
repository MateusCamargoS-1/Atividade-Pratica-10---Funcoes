// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

let num = parseInt(prompt('Insira um numero: '));

function numPerfeito(num) {
    let soma = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            soma += i;
        }
    }

    return soma === num;
}


console.log(numPerfeito(num));
