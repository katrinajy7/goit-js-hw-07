import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querrySelector("ul.gallery");

const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(array) {
   return array.map(({preveiw, original, description}) => {
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