
//Activity card
const actCard = document.createElement('div')
actCard.classList.add('actCard')

const rightside = document.createElement('div')
rightside.classList.add('rightside')
actCard.appendChild(rightside)

const upDiv = document.createElement('div')
upDiv.classList.add('upDiv')
const downDiv = document.createElement('div')
downDiv.classList.add('downDiv')

rightside.appendChild(upDiv)
rightside.appendChild(downDiv)


const cardName = document.createElement('div')
cardName.classList.add('cardName')
const cardDate = document.createElement('div')
cardDate.classList.add('cardDate')

upDiv.appendChild(cardName)
upDiv.appendChild(cardDate)

const cardDetails = document.createElement('div')
cardDetails.classList.add('cardDetails')
const cardDelete = document.createElement('div')
cardDelete.classList.add('cardDelete')
downDiv.appendChild(cardDetails)
downDiv.appendChild(cardDelete)

export {actCard,cardName,cardDate,cardDetails,cardDelete}
