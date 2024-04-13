import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const items = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", items);

galleryList.addEventListener("click", onOriginalImage);

function onOriginalImage(event) {
  const target = event.target;
  event.preventDefault();
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${target.dataset.source}" alt="${target.alt}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscapeKey);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscapeKey);
      },
    }
  );
  function onEscapeKey(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
