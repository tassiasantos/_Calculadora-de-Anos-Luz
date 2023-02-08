var Nome = prompt("Olá, bem vindo(a) Qual o seu nome?");
var Valor = prompt(
  "Insira aqui quantos quilômetros você quer converter em anos-luz:"
);
var valorEmKilometros = Valor;
var valorAnoLuz = 9.5;

var valorConvertidoEmAnoLuz = valorEmKilometros * valorAnoLuz;

alert(
  "Oii, " +
    Nome +
    " , " +
    Valor +
    "Km convertidos para Anos-Luz é " +
    valorConvertidoEmAnoLuz +
    " - *valor maior que 1 trilhão"
);
