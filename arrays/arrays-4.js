const coffees = ['Latte', 'Cappuccino', 'Americano'];
coffees.forEach((name, index, array) => {
    console.log(name)
    console.log(index)
    console.log(array)
})
const prices = [1.5, 1, 2];
prices.forEach((name, index, array) => {
    console.log(name)
    console.log(index)
    console.log(array)
 })

 const newPrices = prices.map((name) => {

    return name + 0.5
 })

let coffeeName = (prompt('Поиск кофе по названию:')).toLowerCase();

switch (coffeeName) {
    case 'latte' :
        alert(`Кофе ${coffees[0]} сейчас стоит ${newPrices[0]} евро`);

        break;

    case 'cappuccino' :
        alert(`Кофе ${coffees[1]} сейчас стоит ${newPrices[1]} евро`);

        break;

    case 'americano' :
        alert(`Кофе ${coffees[2]} сейчас стоит ${newPrices[2]} евро`);

        break

        }
