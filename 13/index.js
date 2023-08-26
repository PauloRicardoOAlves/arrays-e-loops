const disjuntores = [false, true, true, false, false, true, false, true, true, true, true, true, false];
let j = 0

for (let i of disjuntores) {
    if (i) {
        console.log(j)
    }
    j++
}
