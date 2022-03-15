console.log(document.querySelector("#elementoOndeVoceEsta"));
document.querySelector("#elementoOndeVoceEsta").parentElement.style.color = "red";
document.querySelector("#elementoOndeVoceEsta").firstElementChild.innerText = "Primeiro neto!";
console.log(document.querySelector("#pai").firstElementChild);
console.log(document.querySelector("#elementoOndeVoceEsta").previousElementSibling);
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);
console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling);
console.log(document.getElementById("pai").lastElementChild.previousElementSibling);
let elementoPai = document.querySelector("#pai");
let elementoNovo = document.createElement('section'); 
elementoPai.appendChild(elementoNovo);
elementoNovo.id = "quintoIrmaoInesperado";
let elementoOndeVoceEsta = document.querySelector("#elementoOndeVoceEsta"); 
let filhoOndeVoceEsta = document.createElement('section'); 
elementoOndeVoceEsta.appendChild(filhoOndeVoceEsta);
let primeiroFilhodoFilho = document.querySelector("#elementoOndeVoceEsta").firstElementChild; 
let primeiroBisneto = document.createElement('section'); 
primeiroBisneto.id = "primeiroBisneto"; 
primeiroFilhodoFilho.appendChild(primeiroBisneto);
let paiDoPai = document.querySelector("#paiDoPai");
for (index = 0; index <= elementoPai.childNodes; index +=1) {
    if (elementoPai.childNodes[index].id == "elementoOndeVoceEsta"){
        elementoPai.removeChild(elementoPai.childNodes[index]);
    }
}