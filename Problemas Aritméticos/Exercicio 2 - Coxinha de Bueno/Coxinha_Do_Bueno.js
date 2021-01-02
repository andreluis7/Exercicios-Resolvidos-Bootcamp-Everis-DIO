//console.log(parseFloat(gets().split(" ").reduce((acc,cur) => acc/cur,).toFixed(2)));

let coxinha = gets().split(" ");
let H = +coxinha[0];
let P = +coxinha[1];
let media = (H / P).toFixed(2);
console.log(media);