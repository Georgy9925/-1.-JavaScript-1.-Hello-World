

function getDateFormat(date = new Date(), separator = '.') 
{

    const day = date.getDate()

    const month = String(date.getMonth()+1).padStart(2,"0")

    const year = date.getFullYear()

    return day + separator + month + separator + year


}
  console.log(getDateFormat())

