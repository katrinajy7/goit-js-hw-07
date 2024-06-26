import { galleryItems } from './gallery-items.js';
// Change code below this line

let gallery = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    let li = `
    <li class="gallery_item">
        <a class="gallery_link" href="javascript:void(0)">
        <img
            class="gallery_image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
        </a>
    </li>
    `;
    gallery.innerHTML += li;

});

    // gallery.addEventListener("click", (e) => {
    //     if (e.target.tagName === "IMG") {
    //         let bigImage = e.target.getAttribute("data-source");
    //         let instance = basiclightbox.create(`<img src="${bigImage}" width="800" height="600"/>`);
    //         instance.show();

    //         window.addEventListener("keyup", (e) => {
    //             if (e.code ==="Escape") {
    //                 console.log("esc key is pressed");
    //                 instance.close();
    //             }
    //         });

    //     }  
    //  });
            
       
  

// console.log(galleryItems);
