let i = 5;
while ( i < 3) {
    console.log(i);
    i += 1;
    let newStudent = prompt('Введите имя нового студента!').trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`)
    }
  };

  /*let i = 0;
  do {
    console.log(i);
    i += 1;
    let newStudent = prompt('Введите имя нового студента!').trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
        
    }
  }
  while (i < 3)*/