function getDivisorsCount( number ) {
    if (!Number.isInteger(number) || number < 0 ) {
        alert (`${number} должен быть целым числом и больше нуля!`)}
    let count = 0;
    for (let i = 1; i < number + 1; i++) {
        if (number % i === 0) {
            count = count + 1;
        }
    }
return count;
    
} 
console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5)); 
console.log(getDivisorsCount(12)); 
console.log(getDivisorsCount(30));