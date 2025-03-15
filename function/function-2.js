function getSumOfNumbers (number, type) {
    let sum = 0;
    for (let i = 1; i < number + 1; i++) {
      switch (type) {
        case 'odd' :
          if (i % 2) {
            sum = sum + i
          }
          break
        case 'even' :
          if (i % 2 === 0) {
            sum = sum + i
            console.log()
          }
          break
        default:
          sum = sum + i
          break
      }
    }
    return sum
  }
  console.log(getSumOfNumbers(10, "odd")); // 25
  console.log(getSumOfNumbers(10, "even")); // 30
  console.log(getSumOfNumbers(10, "")); // 55  

  