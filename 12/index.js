const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

while (filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora[0])
    filaDeFora.shift()
}
console.log(filaDeDentro)
console.log(filaDeFora)