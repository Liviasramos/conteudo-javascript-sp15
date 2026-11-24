// Objetos

// Objeto simples no JavaScript
const carro = {
  marca: "Porsche",
  modelo: 911,
  cor: "Vermelho",
  ano: 2022,
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);

console.log("");

const pessoa = {
  nome: "Lívia",
  peso: 52,
  altura: 1.71,
  registro: 99999999966,
  idade: 19,
  emprego: false,
  exibirInformacoes: function () {
    
    let saidaEmprego = (this.emprego === true) ? "Sim" : "Não";
    
    return `
      Meu nome é: ${this.nome}
      Minha idade é: ${this.idade}
      Minha altura é: ${this.altura}
      Eu trabalho?: ${saidaEmprego}
      Eu peso: ${this.peso} kg
      E meu número de registro é: ${this.registro}
    `;
  },
};

console.log(pessoa.exibirInformacoes());

console.log(document);