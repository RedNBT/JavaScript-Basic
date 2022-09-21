console.log("Hello world from HTML");
let a = 5;
let b = 10;
console.log('Fifteem is ' + (a + b) + ' and\nnot ' + (a * a + b) + '.');
console.log('Fifteem is ' + a + b + ' and\nnot ' + (a * a + b) + '.'); // Thiếu dấu () nên a + b chỉ là cộng chuỗi ko phải cộng number

//Viết lại theo kiểu Template Strings
// url: '/redNBT/5
console.log(`Fifteem is ${a + b} and
not ${a * a + b}.`);
console.log(`redNBT check strings: a = ${a}  b = ${b}  a+b = ${a + b}`);
console.log(`/redNBT/${a}`);