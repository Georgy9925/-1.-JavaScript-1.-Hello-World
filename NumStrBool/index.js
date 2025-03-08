let age = 20;
console.log(Number(age), Boolean(age), String(age));

let Name = "Georgy";
console.log(Number(Name), Boolean(Name), String(Name));

let BigNum = 56789n;
console.log(Number(BigNum), Boolean(BigNum), String(BigNum));

let blueSky = true;
console.log(Number(blueSky), Boolean(blueSky), String(blueSky));

let money = null;
console.log(Number(money), Boolean(money), String(money));

let dog;
console.log(Number(dog),Boolean(dog), String(dog));

let car = {
    name: "Toyota",
    age: 5,
    whole: true,
}
console.log(Number(car), Boolean(car), String(car));

let id = Symbol("key");
console.log(Boolean(id), String(id));