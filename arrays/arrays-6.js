const numbers = [10, 4, 100, -5, 54, 2];
        
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
 sum = sum + numbers[i] ** 3};
console.log(sum);

sum = 0;
for (let number of numbers){
   sum = sum + number**3;
};
   console.log(sum)  
   
sum = 0;
numbers.forEach((number) => {
    sum = sum + number**3
})
console.log(sum)

let sum1 = numbers.reduce((acc, number) => {
    return acc + number**3
}, 0)
console.log(sum1)