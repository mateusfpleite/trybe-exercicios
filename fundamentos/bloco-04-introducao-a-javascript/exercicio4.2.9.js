let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let mediaArit = 0;
for (let index = 0; index < numbers.length; index +=1) {
    resultado += (numbers[index]);
    mediaArit = resultado/numbers.length;
}
console.log(mediaArit)
if (mediaArit>20){
    console.log("Resultado é maior que 20")
} else {
    console.log("Resultado menor ou igual a 20")
}