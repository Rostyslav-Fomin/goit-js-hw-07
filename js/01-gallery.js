import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onOriginalImage);

let items = galleryItems.map(({ description, original, preview }) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`).join('');
galleryList.insertAdjacentHTML('beforeend', items)

function onOriginalImage(event) {
	const target = event.target;
	event.preventDefault()
	if (!target.classList.contains('gallery__image')) {
		return
	} 
	const instance = basicLightbox.create(`<img src="${target.dataset.source}" alt="${target.alt}">`);
	instance.show()	
	document.addEventListener('keydown', onKey)
	function onKey(event) {
	if (event.code === 'Escape') {
		instance.close()
	}
	}
}

