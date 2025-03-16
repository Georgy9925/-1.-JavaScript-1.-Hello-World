let sum = 0;

for (i = 0; i <= 100; i++) {
    sum += i;
}
alert(sum++)


const userAnswer = prompt("Сколько примитивных типов данных в JavaScript?");
const correctAnswer = 7;

console.log("typeof userAnswer:", typeof userAnswer);
console.log("typeof correctAnswer:", typeof correctAnswer);

if (userAnswer === correctAnswer) {
    debugger
  alert("Правильный ответ!");
} else {
  alert("Неправильно :(");
}
