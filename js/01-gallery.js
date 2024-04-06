import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onImage);

function onImage(event) {
	console.log(event.currentTurget)
}

const items = [];

galleryItems.map(({description, original, preview}) => {
	const element = `<li><img class="img" src="${preview}" alt="${description} data-src="${original}"></li>`;
	items.push(element)
})
galleryList.insertAdjacentHTML('beforeend', ...items)
console.log(galleryList)

