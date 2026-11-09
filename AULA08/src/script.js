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