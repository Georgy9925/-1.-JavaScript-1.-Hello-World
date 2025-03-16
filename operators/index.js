const existingUserLogin = 'the_best_user';
const existingUserPassword = '12345678';

let userLogin = prompt("Введите логин").trim();
let userPassword = prompt("Введите пароль").trim();

if (existingUserLogin === userLogin, existingUserPassword === userPassword) {
    alert(`Добро пожаловать, ${userLogin}`)
} else {
    alert(`Логин и (или) Пароль введены неверно!`)
};