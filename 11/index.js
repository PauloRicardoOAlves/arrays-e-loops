const original = [5, 7, 255, 3, 5, 33, 12, 11, 10, 13, 17, 26, 34, 118, 245];
let nova = []

for (let i of original) {
    if ((i >= 10 && i <= 20) || i > 100) {
        nova.push(i)
    }
}
console.log(nova)