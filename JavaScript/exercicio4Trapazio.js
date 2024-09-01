// Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

// Declaração de variáveis e entrada de dados
var diagonalM = parseFloat(prompt("Informe o valor da diagonal maior"));
var diagonalm = parseFloat(prompt("Informe o valor da diagonal menor"));

// Processamento de dados
var area = (diagonalM * diagonalm) / 2;

// Saída de dados
alert("A área do trapézio é " + area);
