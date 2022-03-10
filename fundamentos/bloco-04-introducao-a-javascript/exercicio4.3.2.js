let word = 'tryber';
let drowArray = []; 
let drow ='';
for (let index = 0; index < word.length; index+=1) {
    drowArray.push(word[word.length -1 -index]);  
}
for (let index = 0; index < drowArray.length; index+=1) {
    drow += drowArray[index];
}
console.log(drow)