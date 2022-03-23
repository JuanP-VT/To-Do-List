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
close.classList.add('close')
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

const select = document.createElement('select')
select.setAttribute('name','importance')
select.id = 'select'
select.add(new Option('low'))
select.add(new Option('mid'))
select.add(new Option('high'))

const label4 = document.createElement('label')
label4.innerHTML = 'Importance'



divForm.appendChild(activityForm)
activityForm.appendChild(label1)
activityForm.appendChild(activityName)
activityForm.appendChild(label2)
activityForm.appendChild(activitDetails)
activityForm.appendChild(label3)
activityForm.appendChild(activityDate)
activityForm.appendChild(label4)
activityForm.appendChild(select)

activityForm.appendChild(btnDiv)
btnDiv.appendChild(submitbtn)

const close2 = new Image()
close2.src = cancelIcon
close2.classList.add('close')
btnDiv.appendChild(close2)

close2.addEventListener('click',closeForm)

export{divForm}


//Activities Divs
const actDiv = document.createElement('div')
actDiv.classList.add('actDiv')
const upDiv=document.createElement('div')
upDiv.classList.add('upDiv')

const divName = document.createElement('div')
divName.textContent = '0'
divName.classList.add('card')
divName.classList.add('divName')
upDiv.appendChild(divName)
const divDate = document.createElement('div')
divDate.textContent= 'date'
divDate.classList.add('divDate')
upDiv.appendChild(divDate)
actDiv.appendChild(upDiv)

const downDiv = document.createElement('div')
downDiv.classList.add('downDiv')
const divDetails = document.createElement('div')
divDetails.textContent = 'details'
divDetails.classList.add('divDetails')
divDetails.classList.add('card')
downDiv.appendChild(divDetails)
const close3 = new Image()
close3.src= cancelIcon

close3.classList.add('close')
downDiv.appendChild(close3)
actDiv.appendChild(downDiv)

export {actDiv,divDate,divDetails,divName}