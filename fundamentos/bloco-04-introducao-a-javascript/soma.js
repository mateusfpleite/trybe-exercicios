// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.
let resultadoSoma =0; 
for (let index = 0; index <=50; index+=1) {
    resultadoSoma+= index;
}
console.log('O resultado da soma é ' + resultadoSoma);
//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let quantidadeNumeros = 0; 
for (let index = 2; index < 151; index+=1) {
    if (index % 3 === 0) {
        quantidadeNumeros +=1; 
    }
}
if (quantidadeNumeros === 50) {
    console.log("Parabéns, você encontrou o 50!");
}
//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let jogador1 = 'pedra'; 
let jogador2 = 'papel'; 
if (jogador1 === jogador2) {
    console.log("A Ties");
} else if ((jogador1 === 'pedra' && jogador2 === 'tesoura') || (jogador1 === 'tesoura' && jogador2 ==='papel') || (jogador1 === 'papel' && jogador2 === 'pedra')) {
    console.log("Player 1 won");
} else { 
    console.log("Player 2 won");
}
//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
let idade = 17;
if (idade < 18) {
    console.log("A pessoa é menor de idade");
} else {
    console.log("A pessoa é maior de idade");
}
//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.
let idadeManu = 25; 
let idadeRonald = 27; 
let idadeAna = 23; 
if (idadeManu<idadeRonald && idadeManu<idadeAna) {
    console.log("Manu é a pessoa mais nova");
} else if (idadeAna<idadeRonald && idadeAna<idadeManu) {
    console.log("Ana é a pessoa mais nova");
} else {
    console.log("Ronald é a pessoa mais nova");
}