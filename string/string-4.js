let userName = prompt('Как вас зовут?');

let userAge = prompt('Сколько вам лет?');

userName1 = userName.trim().toLowerCase();

userAge1 = Number(userAge.trim());

alert(`Вас зовут ${userName1} и вам ${userAge1} лет`);