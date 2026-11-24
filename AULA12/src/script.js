// Objetos

// Acessando Propriedades
const pessoa = {
  nome: "Lívia",
  ultimoNome: "Ramos",
  idade: 19,
};

let notacaoEmPonto = pessoa.nome;
console.log(notacaoEmPonto);

let meuUltimoNomePropriedade = "ultimoNome";
let acessoColchetes = pessoa[meuUltimoNomePropriedade];
console.log(acessoColchetes);

console.log("");

// Atualizando, Criando e Apagando propriedades de objeto
pessoa.nome = "Fulano";
console.log(pessoa.nome);

pessoa.anoNascimento = 2006;
console.log(pessoa.anoNascimento);
console.log(pessoa);

delete pessoa.ultimoNome;
console.log(pessoa.ultimoNome);

console.log("");

// Verificando existência de propriedades em objetos
let resultado = ("altura" in pessoa);

console.log(resultado);

console.log("");

// Objetos Aninhados
const pessoa2 = {
  nome: "Lívia",
  idade: 19,
  meuCarro: {
    marca: "Porsche",
    modelo: "718 GT4",
    ano: 2022,
  },
};

console.log(pessoa2);
console.log(pessoa2.meuCarro);

console.log("");

// Métodos em Objetos
const carro = {
  marca: "Nissan",
  modelo: "GT-R",
  ano: 2024,
  acelerar: function () {
    return `O ${this.marca} ${this.modelo} acelerou.`; 
  }
};

console.log(carro.acelerar());

console.log("");

// Adicionando Método em um Objeto
carro.estacionar = function () {
  return `O ${this.marca} ${this.modelo} estacionou.`;
};

console.log(carro.estacionar());

console.log("");


console.log(this);