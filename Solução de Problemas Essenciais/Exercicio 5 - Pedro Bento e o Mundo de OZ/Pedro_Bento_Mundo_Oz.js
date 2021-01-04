let joias = [];

while (true) {
    let input = gets();
    if (!input) {
        break;
    }
    let find = joias.find(el => el == input)
    if (!find) {
        joias.push(input);
    }
}
console.log(joias.length);