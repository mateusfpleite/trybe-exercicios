let array = ['java', 'javascript', 'python', 'html', 'css'];
maiorPalavra = array[0].length;
menorPalavra = array[0].length
for (let index = 0; index < array.length; index+=1) {
   if (array[index].length>maiorPalavra) {
       maiorPalavra = array[index]
   }
    
   }
   for (let index = 0; index < array.length; index+=1) {
    if (array[index].length<menorPalavra) {
        menorPalavra = array[index]
    }
     
    }
console.log (maiorPalavra)
console.log (menorPalavra)