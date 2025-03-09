let userText = prompt('Введите текст');

let fragmentOfText = prompt('Введите слово из текста').trim();


let indexOfFragment = userText.indexOf(fragmentOfText); 


string = userText.slice(0, indexOfFragment);

alert(`Результат: ${string}`);


