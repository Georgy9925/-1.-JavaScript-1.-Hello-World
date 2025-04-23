document.head.insertAdjacentHTML('beforeend', `
    <style>
      :root {
        --text-shadow-color: rgba(255, 255, 255, 0.5);
        --link-background: #DAD2CA;
        --text-color: #444;
        --circle-background: #8FD4C1;
        --border-color: #ffffff;
      }
      .data-container {
        counter-reset: li;
        list-style: none;
        font: 14px "Trebuchet MS", "Lucida Sans";
        padding: 0;
        text-shadow: 0 1px 0 var(--text-shadow-color);
        margin: 20px 0;
      }
      .data-container li a {
        position: relative;
        display: block;
        padding: .4em .4em .4em 2em;
        margin: .5em 0;
        background: var(--link-background);
        color: var(--text-color);
        text-decoration: none;
        border-radius: .3em;
        transition: .3s ease-out;
      }
      .data-container li a:hover {
        background: #cfc7bf;
      }
      .data-container li a:before {
        content: counter(li);
        counter-increment: li;
        position: absolute;
        left: -1.3em;
        top: 50%;
        margin-top: -1.3em;
        background: var(--circle-background);
        height: 2em;
        width: 2em;
        line-height: 2em;
        border: .3em solid var(--border-color);
        text-align: center;
        font-weight: bold;
        border-radius: 2em;
        transition: all .3s ease-out;
      }
      .data-container li a:hover:before {
        transform: rotate(360deg);
      }
      #loader {
        display: block;
        text-align: center;
        padding: 10px;
        color: var(--text-color);
      }
      .error-message {
        padding: 1em;
        color: #fff;
        background: #e74c3c;
        border-radius: .3em;
        text-align: center;
      }
    </style>
  `);

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