let correctAnswer = null;
let incorrectAnswer = null;


question1 = Number(prompt('Сколько будет 2 + 2?'));
answer1 = Number(4);

if (question1 === answer1) {
    alert('Ответ верный');
    correctAnswer++;
} else {
    alert('Ответ неверный');
    incorrectAnswer++;
}


question2 = Number(prompt('Сколько будет 2 * 2?'));
answer2 = Number(4);

if (question2 === answer2) {
    alert('Ответ верный');
    correctAnswer++;
} else {
    alert('Ответ неверный');
    incorrectAnswer++;
};

question3 = Number(prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'));
answer3 = Number(1);

if (question3 === answer3) {
    alert('Ответ верный');
    correctAnswer++;
} else {
    alert('Ответ неверный');
    incorrectAnswer++;
} 

question4 = Number(prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'));
answer4 = Number(12);

if (question4 === answer4) {
    alert('Ответ верный');
    correctAnswer++;
} else {
    alert('Ответ неверный');
    incorrectAnswer++;
};

question5 = Number(prompt('Сколько будет 2 + 2 * 2?'));
answer5 = Number(6);

if (question5 === answer5) {
    alert('Ответ верный');
    correctAnswer++;
} else {
    alert('Ответ неверный');
    incorrectAnswer++;
};

alert(`Конец теста! Правильные ответы - ${+correctAnswer};\n
    Неправильные ответы - ${+incorrectAnswer}`)


