import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");

const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(array) {
   return array
   .map(({preview, original, description}) => {
        return `
        <a class='gallery_item' href="${original}">
            <img class="gallery_image" src="${preview}" alt="${description}"/>
        </a>
        `;
    })  
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler = new simpleLightbox(".gallery a", { captionsData: "alt", captionsDelay: 250});
console.log(galleryHandler);

// galleryHandler.on(show.simpleLightbox);