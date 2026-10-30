// OPERADOR DE COMPARAÇÃO

// OPERADOR COMPARATIVO DE IGUALDADE
let a = 5;
let comparadorIgualdade = a == 6;
console.log(comparadorIgualdade)

console.log("");

// OPERADOR COMPARATIVO DE IGUALDADE E TIPO
let comparadorIgualdadeTipo1 = (a === 5);
let comparadorIgualdadeTipo2 = (a === "5");
console.log(comparadorIgualdadeTipo1);
console.log(comparadorIgualdadeTipo2);

console.log("");

// OPERADOR COMPARATIVO DE NÂO IGUALDADE (DIFERENÇA)
let comparadorDiferenca1 = (a != 8);
let comparadorDiferenca2 = (a != 5);
let comparadorDiferenca3 = (a != "5");
console.log(comparadorDiferenca1);
console.log(comparadorDiferenca2);
console.log(comparadorDiferenca3);

console.log ("");

// OPERADOR COMPARATIVO DE NÃO IGUALDADE (DIFERENÇA) E TIPOS
let comparadorDiferencaTipo1 = (a !== 8);
let comparadorDiferencaTipo2 = (a !== 5);
let comparadorDiferencaTipo3 = (a !== "5");
console.log(comparadorDiferencaTipo1);
console.log(comparadorDiferencaTipo2);
console.log(comparadorDiferencaTipo3);

console.log("");

// OPERADOR COMPARATIVO MAIOR QUE
let maiorQue1 = (a > 5);
let maiorQue2 = (a > 3);
let maiorQue3 = (a > 8);
console.log(maiorQue1);
console.log(maiorQue2);
console.log (maiorQue3);

console.log("");

// OPERADOR COMPARATIVO MENOR QUE
let menorQue1 = (a < 5);
let menorQue2 = (a < 3);
let menorQue3 = (a < 8);
console.log(menorQue1);
console.log(menorQue2);
console.log(menorQue3);

console.log("");

// OPERADOR COMPARATIVO MAIOR OU IGUAL QUE
let maiorIgualQue1 = (a >= 5);
let maiorIgualQue2 = (a >= 3);
let maiorIgualQue3 = (a >= 8);
console.log(maiorIgualQue1);
console.log(maiorIgualQue2);
console.log(maiorIgualQue3);

console.log("");

// OPERADOR COMPARATIVO MENOR OU IGUAL QUE
let menorIgualQue1 = (a <= 5);
let menorIgualQue2 = (a <= 3);
let menorIgualQue3 = (a <= 8);
console.log(menorIgualQue1);
console.log(menorIgualQue2);
console.log(menorIgualQue3);

console.log("");

// UTILIZANDO OPERADOR DE COMPARAÇÃO EM CONDIÇÃO LÓGICA
let idade = 13;
let mensagem;
if (idade < 18) {
    mensagem = "Muito novo para dirigir";
    console.log(mensagem);
}
