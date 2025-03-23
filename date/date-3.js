function addDays(date, days) {

 const  oneDay = 1000 * 60 * 60 * 24
return new Date(date.getTime() + (days * oneDay))
           
}

console.log(addDays(new Date(), 3));
