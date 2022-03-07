let peca = "CAVALO";
switch (peca.toLowerCase()) {
    case "torre":
        console.log ("move-se para frente e para as laterais")
        break;
    case "rei":
        console.log ("move-se para todas as direções em no máximo uma casa")
        break;
    case "peão":
        console.log ("move-se para frente e para as diagonais em situação de batalha")
        break;
    case "rainha":
        console.log ("move-se para todas as direções sem limitação de casa")
        break;
    case "cavalo":
        console.log ("move-se em forma de L")
        break;
    case "bispo":
        console.log ("move-se nas diagonais")
        break;
    default:
        console.log ("Peça inválida!")
        break;
}
