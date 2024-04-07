import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', onImage);

function onImage({target}) {
	if (!target.classList.contains('gallery__image')) {
		return
	} const instance = basicLightbox.create(document.querySelector('.gallery__image'));
	console.log(instance)
	target.src = target.dataset.src
	instance.show()
}

let items = '';

galleryItems.map(({description, original, preview}) => {
	const element = `<li class="gallery__item"><img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}"></li>`;
	items = items + element;
})
galleryList.insertAdjacentHTML('beforeend', items)
