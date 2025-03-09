let userString = prompt('Введите текст для обрезки');
console.log(userString.trim());

let startSliceIndex = prompt('Введите индекс с которого нужно начать обрезку строки');

let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')

let string = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${string}`);