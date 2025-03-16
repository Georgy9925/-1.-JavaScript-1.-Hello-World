const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = (prompt('Поиск кофе по названию:')).toLowerCase();

switch (coffeeName) {
    case 'latte' :
  
const number1 = coffees.findIndex((coffee) => {

    return coffee === 'Latte'
})
    alert(`Держите ваш любимый кофе Latte. Он ${number1+1}-й по популярности в нашей кофейне.`);
        
    break
        
    case 'cappuccino' :

const number2 = coffees.findIndex((coffee) => {

    return coffee === 'Cappuccino'
})
     alert(`Держите ваш любимый кофе Cappuccino. Он ${number2+1}-й по популярности в нашей кофейне.`);
            
     break

     case 'americano' :

const number3 = coffees.findIndex((coffee) => {

     return coffee === 'Americano'
 })
    alert(`Держите ваш любимый кофе Americano. Он ${number3+1}-й по популярности в нашей кофейне.`);

    break

    default:

    alert('К сожалению, такого вида кофе нет в наличии');

    break;
}

