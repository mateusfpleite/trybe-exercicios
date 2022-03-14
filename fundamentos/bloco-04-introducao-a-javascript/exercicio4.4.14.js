function finalDaPalavra (word, ending) {
for (let caractere in word) {
    for (let caractere2 in ending) {
        if (ending[caractere2].length-1 -caractere2 === word.length-1 - caractere) {
            return true
        } else {
            return false
        }
    }
} 
}
console.log(finalDaPalavra('trybe', 'be'));