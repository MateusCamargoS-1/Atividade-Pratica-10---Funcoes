// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

const num = parseInt(prompt('Informe um Numero: '));


function primo(num) {
    
    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i <= (num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

const resultado = primo(num);

if (num) {
    console.log(resultado);
} else {
    console.log('Valor ínvalido.')
}
