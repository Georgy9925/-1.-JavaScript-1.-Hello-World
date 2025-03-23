function getDaysBeforeBirthday(nextBirthdayDate = new Date(2025, 2, 28, 7)) {
  
    return  convertMsToDays(nextBirthdayDate.getTime() - new Date().getTime())

}

//function convertMsToDays(result) {
    //return Math.round(result / 1000 / 60 / 60 / 24)

//}


console.log(getDaysBeforeBirthday())