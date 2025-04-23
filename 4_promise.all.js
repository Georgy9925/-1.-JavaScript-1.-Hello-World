const USERS = 'https://jsonplaceholder.typicode.com/users'

const createDataElement = (text) => {
    const dataElement = document.createElement('li');
    const dataElementAncher = document.createElement('a');
    dataElementAncher.href = '#';
    dataElementAncher.textContent = text;
    dataElement.append(dataElementAncher);

    return dataElement
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}
const dataContainer = document.querySelector('#data-container');

const getAllDataUsers = () => {
    toggleLoader()
    const dataUser = fetch(USERS, {
        method: 'GET',
     
     })
     
     dataUser
         .then((response) => {
             if (!response.ok) {
                 throw new Error('Ошибка запроса')
             }
             return response.json()
         })
         .then((user) => {
             
             user.forEach( (user)=> { 
                const userHTML = createDataElement(user.name);
                dataContainer.append(userHTML)
             });
         })
         .catch((error) => {
             console.log(error)
         })
         .finally(() => {
            toggleLoader()
         })
} 

getAllDataUsers()
