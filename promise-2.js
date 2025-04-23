const USERS = 'https://jsonplaceholder.typicode.com/users';
const dataContainer = document.querySelector('#data-container');

const createDataElement = (text) => {
    const dataElement = document.createElement('li');
    const dataElementAncher = document.createElement('a');
    dataElementAncher.href = '#';
    dataElementAncher.textContent = text;
    dataElement.append(dataElementAncher);
    return dataElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

const getUserByIds = (ids) => {
    toggleLoader();
    const requests = ids.map(id => 
        fetch(`${USERS}/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке пользователя ${id}`);
                }
                return response.json();
            })
    );

    Promise.all(requests)
        .then(users => {
            users.forEach(user => {
                const userHTML = createDataElement(user.name);
                dataContainer.append(userHTML);
            });
        })
        .catch(error => {
            console.log( error);
        })
        .finally(() => {
            toggleLoader();
        });
}

const loadUsers = () => {
    const userIds = [5, 6, 2, 1];
    getUserByIds(userIds); 
}

loadUsers()