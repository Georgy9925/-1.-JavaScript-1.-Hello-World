document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="async-3.css">');

const ALBUM_URL = 'https://jsonplaceholder.typicode.com/albums'

const dataContainer = document.querySelector('.data-container')


const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

const renderAlbums =async () => {
    toggleLoader()
    try {
        
        const response = await fetch(ALBUM_URL)
        const albums = await response.json()
        dataContainer.innerHTML = '';

        const olElement = document.createElement('ol')
        albums.forEach((album)=> {
            const liElement = document.createElement('li')
            liElement.textContent = album.title
            olElement.append(liElement)
        })
        dataContainer.append(olElement)
        
} catch(error) {
    dataContainer.innerHTML = 'Произошла ошибка в получении данных об альбомах...'
} finally {
    toggleLoader()
}}


    console.log(renderAlbums())

