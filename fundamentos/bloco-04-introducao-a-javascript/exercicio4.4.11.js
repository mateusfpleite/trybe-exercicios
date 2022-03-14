function maiorNome(array) {
let nomeQualquer = array[0]; 
for (let index in array) {
    if (array[index].length > nomeQualquer.length) {
         nomeQualquer = array[index];
    }
}
return nomeQualquer;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));