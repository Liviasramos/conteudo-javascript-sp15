// FUNÇÕES

// DEFININDO VALOR PADRÃO PARA PARÂMETROS DE FUNÇÃO
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 10));
console.log(soma(4, 10));

console.log("");

// UTILIZANDO RETORNO DE FUNÇÃO EM EXPRESSÃO
function multiplicar(a, b) {
    return a * b;
}

let resultadoExpressao = multiplicar(4, 5) * 4;
console.log(resultadoExpressao);

console.log("");

// FUNÇÃO RETORNANDO STRING
function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}
console.log(nomeCompleto("Lívia", "Ramos"));

console.log("");

// RETORNO PARA ENCERRAR A EXECUÇÃO DE FUNÇÃO
function subtracao(a, b) {
    return "Nascemos originais, mas muitos morrem como fotocópias."
    return a - b;
}
console.log(subtracao(5, 2));

console.log("");

// RETORNO EM CONDIÇÃO LÓGICA
function verificarIdade(idade) {
    if (idade < 18) {
        return "Você é menor de idade.";
    }

    return "Você é maior de idade.";
}

console.log(verificarIdade(14));

console.log("");

// RETORNANDO VALOR NO HTML
const elementoh4 = document.querySelector
(".ex1");

function exibirMensagem(mensagem) {
    return "Você é legal";
}
elementoh4.innerHTML = exibirMensagem();

console.log("");

// EXPRESSÃO DE FUNÇÃO
let multiplicar2 = function (a, b) {
    return a * b;
};

console.log(multiplicar2(5, 6));

console.log("");
