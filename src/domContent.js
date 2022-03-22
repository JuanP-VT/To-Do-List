import cancelIcon from './img/cancelIcon.png';
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


