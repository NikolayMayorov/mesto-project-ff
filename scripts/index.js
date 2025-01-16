// @todo: Темплейт карточки
const cardTemplate = document
	.querySelector('#card-template')
	.content.querySelector('.card')

// @todo: DOM узлы
const placeForCards = document.querySelector('.places__list')

// @todo: Функция создания карточки
function createCard(cardData, deleteCallback) {
	const card = cardTemplate.cloneNode(true)
	card
		.querySelector('.card__delete-button')
		.addEventListener('click', function () {
			deleteCallback(card)
		})
	const cardImageNode = card.querySelector('.card__image')
	cardImageNode.src = cardData.link
	cardImageNode.alt = cardData.name
	card.querySelector('.card__title').innerText = cardData.name
	return card
}

// @todo: Функция удаления карточки
function deleteCard(card) {
	card.remove()
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
	const card = createCard(item, deleteCard)
	if (card !== null) {
		placeForCards.append(card)
	}
})
