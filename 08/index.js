const numeros = [3, 24, 100, 12, 55, 7, 15];
let maior = 0

for (let i of numeros) {
    if (i > maior) {
        maior = i
    }
}
console.log(maior)