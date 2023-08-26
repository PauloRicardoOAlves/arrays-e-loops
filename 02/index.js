const letras = ["A", "a", "B", "C", "E", "e"];
let somaE = 0

for (let i of letras){
    if(i=="E"||i=="e"){
        somaE++
    }
}
if(somaE != 0){
    console.log(`foram encontradas ${somaE} letras "e" ou "E".`)
} else {
    console.log('Nenhuma leta "e" ou "E" foi encontrada.')
}