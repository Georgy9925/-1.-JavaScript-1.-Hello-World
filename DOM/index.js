const BODY = document.querySelector('body')


BODY.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`



const body = document.querySelector('body')

const form = document.createElement('form');

form.className= 'create-user-form';

const label = document.createElement('label');

label.textContent= 'Имя';

form.appendChild(label);

const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'userName');
inputName.setAttribute('placeholder', 'Введите имя');

label.appendChild(inputName);

const label1 = document.createElement('label')

label1.textContent = 'Пароль';
form.appendChild(label1);

const inputName1 = document.createElement('input');

inputName1.setAttribute('type', 'password');
inputName1.setAttribute('name', 'password');
inputName1.setAttribute('placeholder', 'Придумайте пароль');

label1.appendChild(inputName1);

const button = document.createElement('button');

button.setAttribute('type', 'submit');
button.textContent = 'Подтвердить';

form.appendChild(button);

document.body.append(form);

console.log(form)