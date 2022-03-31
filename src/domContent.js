import closeIcon from './img/cancelIcon.png'
//Form to add new projects

const newProjectFormDiv = document.createElement('div')
newProjectFormDiv.id = 'newProjectFormDiv'

const nameLabel = document.createElement('label')
nameLabel.setAttribute('for','nameInput')
nameLabel.textContent = 'Project Name'
const nameInput = document.createElement('input')
nameInput.id = 'nameInput'

newProjectFormDiv.appendChild(nameLabel)
newProjectFormDiv.appendChild(nameInput)



const formFooter = document.createElement('div')
formFooter.id = 'formFooter'
const submitProject = document.createElement('button')
submitProject.textContent = 'Add Project'
submitProject.id = 'submit'

const closeNewProjectForm = new Image ()
closeNewProjectForm.src = closeIcon
closeNewProjectForm.classList.add('icon')
closeNewProjectForm.id = 'closeNewProjectForm'

formFooter.appendChild(submitProject)
formFooter.appendChild(closeNewProjectForm)
newProjectFormDiv.appendChild(formFooter)
export {newProjectFormDiv}




//Form to add activities to projects

const activitiesFormDiv = document.createElement('div')
activitiesFormDiv.id = 'activitiesFormDiv'


const nameInputLabel = document.createElement('label')
nameInputLabel.setAttribute('for','actNameInput')
nameInputLabel.textContent = 'Activity Name'
const actNameInput = document.createElement('input')
actNameInput.id = 'actNameInput'
activitiesFormDiv.appendChild(nameInputLabel)
activitiesFormDiv.appendChild(actNameInput)

const actDetailsLabel = document.createElement('label')
actDetailsLabel.setAttribute('for','actDetails')
actDetailsLabel.textContent = 'Details'
const actDetails = document.createElement('input')
actDetails.id = 'actDetails'
activitiesFormDiv.appendChild(actDetailsLabel)
activitiesFormDiv.appendChild(actDetails)


const actDateLabel = document.createElement('label')
actDateLabel.setAttribute('for','actDate')
actDateLabel.textContent = 'Due Date'
const actDate = document.createElement('input')
actDate.id = 'actDate'
actDate.type = 'date'

activitiesFormDiv.appendChild(actDateLabel)
activitiesFormDiv.appendChild(actDate)

const selectLabel = document.createElement('label')
selectLabel.setAttribute('for','select')
selectLabel.textContent = 'Importance'
const select = document.createElement('select')
select.id = 'select'
select.add(new Option('Low'))
select.add(new Option('Mid'))
select.add(new Option('High'))

activitiesFormDiv.appendChild(selectLabel)
activitiesFormDiv.appendChild(select)

const submitFooter = document.createElement('div')
submitFooter.id = 'submitFooter'
activitiesFormDiv.appendChild(submitFooter)
const addActivity = document.createElement('button')
addActivity.id = 'addActivity'
addActivity.textContent = 'Add Activity'

const newCloseIcon =  new Image()
newCloseIcon.src = closeIcon
newCloseIcon.id = 'newCloseIcon'

submitFooter.appendChild(addActivity)
submitFooter.appendChild(newCloseIcon)

export {activitiesFormDiv}


//Activity card
const actCard = document.createElement('div')
actCard.classList.add('actCard')

const checkbox = document.createElement('div')
checkbox.classList.add('checkbox')
actCard.appendChild(checkbox)
const chkbtn = document.createElement('button')
chkbtn.textContent = 'O'
chkbtn.classList.add('chkbtn')
checkbox.appendChild(chkbtn)

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
const cardDeleteIcon = new Image()
cardDeleteIcon.src = closeIcon
cardDeleteIcon.classList.add('cardDeleteIcon')
cardDelete.appendChild(cardDeleteIcon)
downDiv.appendChild(cardDetails)
downDiv.appendChild(cardDelete)

export {actCard,cardName,cardDate,cardDetails,cardDelete,cardDeleteIcon,chkbtn,checkbox}




