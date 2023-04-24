//bai1
let arrList = [1, 4, 8, 4, 9, 5, 10, 7, 15, 6];
function sapXep(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;

}
sapXep(arrList);
let max = arrList.length - 2;
console.log(arrList[max]);
console.log(arrList);


//bai 2
function validateInput(inputType, inputValue) {
    switch (inputType) {
        case 'username':
            if (!inputValue === true) {
                console.log('khong duoc de du lieu trong');
                return false;
            }
            if (typeof inputValue !== 'string') {
                console.log('username phai la chuoi');
                return false;
            }
            const regExUserName = /^[a-zA-Z0-9_]{4,16}$/;
            if (regExUserName.test(inputValue) === false) {
                console.log('username khong duoc chua ly tu dac biet va co do dai tu 4- 16 ky tu');
                return false;
            }
            console.log(inputValue);
            break;
        // Kiểm tra độ dài tên đăng nhập phải từ 4 đến 16 ký tự
        // Khong co ky tu dac biet

        case 'password':

            if (!inputValue === true) {
                console.log('khong duoc de du lieu trong');
                return false;
            }
            if (typeof inputValue !== 'string') {
                console.log('username phai la chuoi');
                return false;
            }
            const regExPassWord = /^[a-zA-Z0-9_]{6,20}$/;
            const dieukien = /^[a-zA-Z]+$/;
            const dieukien2 = /^[a-z0-9]+$/;

            // console.log(dieukien.test(inputValue));
            if (dieukien.test(inputValue) === true || dieukien2.test(inputValue) === true) {
                console.log('Mật khẩu phải chứa ít nhất một ký tự viết hoa, một ký tự thường và một số');
                return false;
            }
            if (regExPassWord.test(inputValue) === false) {
                console.log('pass phai co do dai tu 6-20 ky tu');
                return false;
            }
            console.log(inputValue);
            break;
        // Kiểm tra độ dài mật khẩu phải từ 6 đến 20 ký tự
        // phai co it nhat 1 so
    }
}


// console.log(validateInput('username', 'john_doe')); // true
// console.log(validateInput('username', 'john.doe')); // Tên đăng nhập không được chứa ký tự đặc biệt
// console.log(validateInput('username', 'john')); // Tên đăng nhập phải từ 4 đến 16 ký tự
// console.log(validateInput('password', 'Abc123')); // true
// console.log(validateInput('password', 'abc123')); // Mật khẩu phải chứa ít nhất một ký tự viết hoa, một ký tự thường và một số
// console.log(validateInput('password', 'Password123')); // Mật khẩu phải





//bai 3

function Person(firstName, lastName, age, render, inserests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.render = render;
    this.inserests = inserests;

}

const person1 = new Person('Hau', 'Nguyen', 20, 'male', ['game', 'sleep', 'eat']);

Person.prototype.getInfor = () => {
    return person1.firstName + '-' + person1.lastName + '-' + person1.age + '-' + person1.render + '-' + person1.inserests;
}
Person.prototype.greeting = (nameGre) => {
    return `${person1.firstName} xin chao ${nameGre}`;
}
console.log(person1.getInfor()); //Hau-Nguyen-20-male-game,sleep,eat
console.log(person1.greeting('Anh'));//Hau xin chao Anh



const checkPersonConstructor = (bienPerson) => {
    if (bienPerson.constructor !== Person) {
        console.log(`${bienPerson} khong phai la doi tuong Person`);
        return false;
    }
    console.log(`${bienPerson} la doi tuong Person`);
    return true;
}

checkPersonConstructor(person1);