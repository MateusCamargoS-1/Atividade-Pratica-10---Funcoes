// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

let seg = Number(prompt('Informe o tempo em segundos: '));

function segundosHoras(seg) {
    let horas = Math.floor(seg / 3600);
    let min = Math.floor((seg % 3600) / 60);
    let segundosRestantes = seg % 60;

    return `${horas} : ${min} : ${segundosRestantes}`;
}

const result = segundosHoras(seg);
console.log(result);