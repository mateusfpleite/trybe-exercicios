function maiorIndice(inteiros) {
let maiorInteiro = inteiros[0]; 
for (index in inteiros) {
    if (inteiros[index] > maiorInteiro) {
        maiorInteiro = index;    
    }
}
return maiorInteiro
}
console.log(maiorIndice([2, 3, 6, 7, 10, 1]));