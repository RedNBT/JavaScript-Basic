console.log('Hello world from HTML');

//key: value
let obj = {
    name: 'RedNBT',
    address: 'Quảng Nam',
    email: 'baotinnguyen4@gmail.com',
};
let c = '';

//Đổi value trong key name của obj (Cách đổi khi chưa biết tên key)
let b = 'name';
obj[b] = 'BaoTin';

//Cách đổi khi đã biết tên key
// obj.name = 'ABC';

console.log('type of obj: ', typeof obj, ' type of b: ', typeof b, ' type of c: ', typeof c);
console.log('what is your name ? ', `My name 's : `, obj.name);
console.log('what is your name ? ', `My name 's : `, obj['name'], obj); //Hiển thị dữ liệu đã đổi
console.log('where are you from ? ', `I'm from : `, obj.address);
console.log('Email: ', obj.email);
