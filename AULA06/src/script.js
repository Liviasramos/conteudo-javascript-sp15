// CONDIÇÕES LÓGICAS

// IF
const hora = new Date().getHours();
if (hora < 18) {
    alert ("Bom dia!");
}

let pais = "Brasil";
let idade = 25;
let mensagem = "Você não pode dirigir";

// if (pais == "Brasil") 
//     if (idade >=18) {
//         mensagem = "Você pode dirigir";
    // }


// OU = APENAS UMA VERDADEIRA PARA SER VERDADEIRA

if (pais === "Brasil" && idade >= 18) {
    mensagem = "Você pode dirigir";
}
console.log(mensagem);

// IF ELSE
const hora2 = new Date().getHours;
let saudacao;
if (hora >= 18) {
    saudacao = "Boa noite!";
    } else {
    saudacao = "Bom dia!";

    console.log(saudacao);
    }

    console.log("")

    // ELSE IF
    const hora3 = new Date() .getHours();
    let saudacao2
    if (hora3 < 12) {
        saudacao2 = "Bom dia!";
    } else if (hora < 18) {
        saudacao2 = "Boa tarde!";
    } else {
        saudacao2 = "Boa noite!";
    }
    console.log(saudacao2);
    console.log("");

    // IF TERNÁRIO
    const dia = new Date().getDate();
    let diaMes = (dia === 4) ? "Hoje é dia 4 de novembro." : "Hoje não é dia 4 de novembro";
    console.log(diaMes);

    console.log("")

    // SWITCH
    let diaSemana;
    const diaSemanaHoje = new Date().getDay();
    switch (diaSemanaHoje) {
        case 0:
            diaSemana = "Domingo"
            break;

            case 1:
                diaSemana = "Segunda-feira";
                break;

            case 2:
                diaSemana = "Terça-feira";
                break;

            case 3:
                diaSemana = "Quarta-feira";
                break;

            case 4:
                diaSemana = "Quinta-feira";
                break;

            case 5:
                diaSemana = "Sexta-feira";

            case 6:
                diaSemana = "Sábado";
                break;
            
            }

            console.log("Hoje é " + diaSemana);

            console.log("");

