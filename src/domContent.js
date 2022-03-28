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