// Objetos

// Construtores de Objetos

// const pessoa = {
//   nome: "Lívia",
//   sobrenome: "Ramos",
//   idade: 19,
//   altura: 1.71,
// };

function Pessoa(nome, sobrenome, idade, altura) {
  this.nomePessoa = nome;
  this.sobrenomePessoa = sobrenome;
  this.idadePessoa = idade;
  this.alturaPessoa = altura;
}

const minhaPessoa = new Pessoa("Lívia", "Ramos", 19, 1.71);

const meuIrmao = new Pessoa("Flavio", "Souza", 27, 1.80);

console.log(minhaPessoa);
console.log(meuIrmao);

meuIrmao.carro = "Porsche";
minhaPessoa.moto = "Ducati";

console.log(Pessoa);