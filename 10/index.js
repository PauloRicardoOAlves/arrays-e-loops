const numeros = [8, 11, 4, 20]
let menor = numeros[0]
let maior = numeros[0]
let resultado = 0

for (let i of numeros) {
    if (i < menor) {
        menor = i
    } else if (i > maior) {
        maior = i
    }
}
resultado = maior - menor

console.log(resultado)