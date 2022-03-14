function verificaPalindromo(string) { 
    let arrayPalavra = [];
    let arrayInvertido = [];;
        for (let index = 0; index < string.length; index+=1) {
            arrayPalavra.push(string[index]); 
            arrayInvertido.push(string[index]);  
        }
    arrayInvertido = arrayInvertido.reverse(); 
       for(string in arrayPalavra && arrayInvertido) {
       if (arrayPalavra[string] == arrayInvertido[string]) {
           return true;
       } else {
           return false;
       }
    }
} 
console.log(verificaPalindromo('amor'));