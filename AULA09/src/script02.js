// FUNÇÕES

// FUNÇÃO DE MULTIPLICAÇÃO
function multiplicar (a, b) {
    return a * b;
}
console.log(multiplicar(10, 3));
console.log(multiplicar(7, 4));
console.log(multiplicar(6, 9));

// FUNÇÃO DE ADIÇÃO
function somar (c, d) {
    return c + d;
}
console.log(somar(3, 6));
console.log(somar(9,4));
console.log(somar(14, 8));

// FUNÇÃO DE DIVISÃO
function dividir (e, f) {
    return e / f;
}
console.log(dividir(10, 5));
console.log(dividir(6, 2));
console.log(dividir(8, 4));

// FUNÇÃO DE SUBTRAÇÃO
function subtrair (g, h) {
    return g - h;
}
console.log(subtrair(8, 5));
console.log(subtrair(4, 1));
console.log(subtrair(7, 5));

console.log("");

// FUNÇÃO COM UM PARÂMETRO
function paraCelsius(grausFahrenheit) {

    let calculoConversao = (5/9) * (grausFahrenheit - 32)

    return `${grausFahrenheit}° Fahrenheit convertido paa Celsius é igual a: ${calculoConversao}°C`;
}
console.log(paraCelsius (212));



