const arrayA = [5, 32, 3, 44, 1, 54];
const arrayB = [57, 4, 21, 2, 13, 53];
let resultado = 0

if (arrayA.length === arrayB.length) {
    for (let i = 0; i <= arrayA.length; i++) {
        if (arrayA[i] > arrayB[i]) {
            console.log(arrayA[i])
        } else if (arrayB[i] > arrayA[i]) {
            console.log(arrayB[i])
        } else {
            console.log("os dois números são iguais")
        }
    }
} else {
    console.log("ERRO! Os arrays precisam ter o mesmo tamanho")
}