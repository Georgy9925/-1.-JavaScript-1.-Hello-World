const age = 25;

console.log('age', age, typeof age);

const myName = 'Georgy';

console.log('myName', myName, typeof myName);

const BigNum = 435363n;

console.log('BigNum', BigNum, typeof BigNum);

const grassGreen = true;

console.log('grassGreen', grassGreen, typeof grassGreen);

const myWallet = null;

console.log('myWallet', myWallet, typeof myWallet);

let fish;
//через const выдает ошибку

console.log('fish', fish, typeof fish);

const I = {
    name: "Georgy",
    age: 25,
    old: false,
}

console.log(I, 'I', typeof I);

const id = Symbol("key");

console.log('id', id, typeof id);