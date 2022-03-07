const anguloA = -40;
const anguloB = 70;
const anguloC = 60; 
const somaDosAngulos = anguloA+anguloB+anguloC;
if (somaDosAngulos === 180 && anguloA>0 && anguloB>0 && anguloC>0) {
    console.log("true")
} else if (somaDosAngulos !== 180 && anguloA>0 && anguloB>0 && anguloC>0) {
    console.log("false")
} else {
    console.log ("Somente ângulos com valor maior que 0 são válidos")
}