// 1. Crie uma função q recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritméuetica,
// se for P, a média ponderada (peso: 5, 3 e 2).

let nota1 = parseFloat(prompt('Informe a primeira nota: '));
let nota2 = parseFloat(prompt('Informe a segunda nota: '));
let nota3 = parseFloat(prompt('Informe a terceira nota: '));
let letra = prompt('Informe A - para média Aritmética ou P - para ponderada').toUpperCase();

function calcularMedia(nota1, nota2, nota3, letra) {
    let peso = [5, 3, 2]

    switch(letra) {
        case 'A':
            let mediaAritmetica = nota1 + nota2 + nota3 / 3;
            return `A media Aritmética é: ${mediaAritmetica.toFixed(1)}`;
        case 'P':
            let mediaPonderada = (nota1 * peso[0] + nota2 * peso[1] + nota3 * peso[2]) / (peso[0] + peso[1] + peso[2]);
            return `A média Ponderada é: ${mediaPonderada.toFixed(1)}`;
        default:
            return 'Valores Inválidos';
    }
}

const media = calcularMedia(nota1, nota2, nota3, letra);
console.log(media)