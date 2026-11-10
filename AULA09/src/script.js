// LAÇOS DE REPITIÇÃO (LOOPS)

// LOOP FOR
for (let acumuladora = 0; acumuladora <= 10; acumuladora++) {
    console.log(acumuladora);
}

console.log("");

const carros = ["Palio", "HB20", "Corolla", "Mobi", "Corsa"]
console.log(carros);
let tamanhoArray = carros.length;

for (let acumuladora = 0; acumuladora < tamanhoArray; acumuladora++) {
    console.log(carros[acumuladora]);
}

console.log("");

let i, x = '';
for (i = 0; i <= 5; i ++) {
    x += i;
}

console.log("");

// LAÇO WHILE
let acumuladora = 0;
while (acumuladora <=10) {
    console.log(acumuladora);
    acumuladora++;
}

// LAÇO DO WHILE
let acumuladora2 = 0;
do {
    console.log(acumuladora2);
    acumuladora2++;
}
while (acumuladora2 <= 10);

// CALCULADORA COM DO WHILE
do {
    alert("Calculadora");
    let numero1 = parseFloat(prompt("Informe o primeiro número do cálculo"));
    let operador = prompt("Informe o operador aritimético");
    let numero2 = parseFloat(prompt("Informe o segundo número do cálculo"));
    

    switch (operador) {
        case "+":
            let soma = numero1 + numero2;
            alert(`${numero1} + ${numero2} = ${soma}`);
            break;

        case "-":
            let subtracao = numero1 - numero2;
            alert(`${numero1} + ${numero2} = ${subtracao}`);
            break;

        case "*":
            let multiplicacao = numero1 * numero2;
            alert(`${numero1} + ${numero2} = ${multiplicacao}`);
            break;

        case "/":
            let divisao = numero1 / numero2;
            alert(`${numero1} + ${numero2} = ${divisao}`);
            break;    
    }

    let condicao = prompt("Você deseja continuar calculando(s/n)?");
} while (condicao === "s");