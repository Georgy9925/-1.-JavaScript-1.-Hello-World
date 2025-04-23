const PHOTOS = 'https://api.slingacademy.com/v1/sample-data/photos/';

const dataContainer = document.querySelector('#data-container');
const createPhotoElement = ({url, title}) => {
    const photoItem = document.createElement('li')
    photoItem.className = 'photo-item';
    photoItem.innerHTML = `
        <img class="photo-item__image" src="${url}">
        <h3 class="photo-item__title">${title}</h3>`;
        return photoItem
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

const getFastestLoadedPhoto = (ids) => {
    toggleLoader()
    const promises = ids.map(id => 
         fetch(`${PHOTOS}/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Ошибка при загрузке фото ${id}`);
                }
                return response.json();
            })
    );

    Promise.race(promises)
        .then(photo => {
            const photoHTML = createPhotoElement(photo);
            dataContainer.append(photoHTML)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            toggleLoader()
        })
}

getFastestLoadedPhoto([60, 12, 55])