// @todo: Темплейт карточки
const cardTemplate = document
	.querySelector('#card-template')
	.content.querySelector('.card')

// @todo: DOM узлы
const buttonAddCard = document.querySelector('.profile__add-button')
const placeForCards = document.querySelector('.places__list')

// @todo: Функция создания карточки
function createCard(card, deleteCallback) {
	if (initialCards.length > 0) {
		const rnd = Math.floor(Math.random() * initialCards.length)
		card
			.querySelector('.card__delete-button')
			.addEventListener('click', deleteCallback)
		card.querySelector('.card__image').src = initialCards[rnd].link
		card.querySelector('.card__image').alt = initialCards[rnd].name
		card.querySelector('.card__title').innerText = initialCards[rnd].name
		initialCards.splice(rnd, 1)
		return card
	} else {
		return null
	}
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
	const currentCard = evt.target.parentElement
	const item = {
		name: currentCard.querySelector('.card__title').innerText,
		link: currentCard.querySelector('.card__image').src,
	}
	initialCards.push(item)
	currentCard.remove()
}

// @todo: Вывести карточки на страницу
buttonAddCard.addEventListener('click', function () {
	const card = createCard(cardTemplate.cloneNode(true), deleteCard)
	if (card !== null) {
		placeForCards.append(card)
	}
})
