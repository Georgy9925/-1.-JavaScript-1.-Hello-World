const clientsEstimations = [];

const askClientToGiveEstimation = () => {
    let res = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
    if(res >= 1 && res <= 10) {
        clientsEstimations.push(res);
    }
};

for(let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter(n => n > 5);
const notGoodEstimations = clientsEstimations.filter(n => n <= 5);
 
alert(`Всего положительных оценок: ${goodEstimations.length}
Всего отрицательных оценок: ${notGoodEstimations.length}`);
 
