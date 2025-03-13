let health = Number(prompt('Введите число параметра "здоровье" для персонажа'));
console.log("health", typeof health);

if (health <= 0 ) {
  alert('Параметр "здоровье" должен быть больше нуля!')   
} else if ( health > 0) 
{ 
 alert(`Параметр "здоровье" равен ${health}`)
}


