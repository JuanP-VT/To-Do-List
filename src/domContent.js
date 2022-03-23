//FORM
import cancelIcon from './img/cancelIcon.png';
import { closeForm } from './closeForm';

const form = document.createElement('form')
form.id = 'form'
const nameInput = document.createElement('input')
nameInput.id = 'nameInput'
const label = document.createElement('label')
label.setAttribute("for",nameInput)
label.innerHTML = 'Project Name'
form.appendChild(label)
form.appendChild(nameInput)

const confirmDiv = document.createElement('div')
confirmDiv.id = 'confirmDiv'
const submit = document.createElement('button')
submit.textContent = 'Add'
submit.id = 'submit'
confirmDiv.appendChild(submit)
const close = new Image()
close.src = cancelIcon
close.id = 'close'
confirmDiv.appendChild(close)

form.appendChild(confirmDiv)

export {form}

const divForm = document.createElement('div')
divForm.id = 'divForm'

const activityForm = document.createElement('form') 
activityForm.id = 'activityForm'
const activityName = document.createElement('input')
activityName.id = 'activityName'
const activitDetails = document.createElement('input')
activitDetails.id = 'activityDetails'
const activityDate = document.createElement('input')
activityDate.id = 'activityDate'
const label1 = document.createElement('label')
label1.innerHTML = 'Activity'
const label2 = document.createElement('label')
label2.innerHTML = 'Details'
activityDate.type = 'date'
const label3 = document.createElement('label')
label3.innerHTML = 'Due Date'

const btnDiv = document.createElement('div')
btnDiv.id = 'btnDiv'
const submitbtn = document.createElement('button')
submitbtn.id = 'activitySubmit'
submitbtn.textContent = 'Add'

const checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkbox.id = 'checkbox'
const label4 = document.createElement('label')
label4.innerHTML = 'Very Important'



divForm.appendChild(activityForm)
activityForm.appendChild(label1)
activityForm.appendChild(activityName)
activityForm.appendChild(label2)
activityForm.appendChild(activitDetails)
activityForm.appendChild(label3)
activityForm.appendChild(activityDate)
activityForm.appendChild(label4)
activityForm.appendChild(checkbox)

activityForm.appendChild(btnDiv)
btnDiv.appendChild(submitbtn)
btnDiv.appendChild(close)

close.addEventListener('click',closeForm)

export{divForm}