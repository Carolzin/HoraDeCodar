// Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

// Declaração de variáveis e entrada de dados
var baseM = prompt("Informe o valor da base maior");
var basem = prompt("Informe o valor da base menor");
var altura = prompt("Informe o valor da altura");

// Processamento de dados
var area = (parseFloat(baseM) + parseFloat(basem)) * parseFloat(altura) / 2;

// Saída de dados
alert("A área do trapézio é " + area);
