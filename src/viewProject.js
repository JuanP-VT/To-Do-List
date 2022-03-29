import { createFormToAddActivities } from './CreateFormToAddActivities'
import { deleteProject } from './deleteProject'
import delIcon from './img/delIcon.png'

function viewProject(){
//Display Name
const name = this.getAttribute('data-key')
const $projectName = document.querySelector('#projectName')
$projectName.textContent = name

//Check for delete button
const $delProject = document.querySelector('#delProject')

//Clear previous buttons
while ($delProject.firstChild){
    $delProject.removeChild($delProject.firstChild)
}

//Create new delete button
const icon = new Image()
icon.src = delIcon
icon.classList.add('icon') 
icon.id = 'deleteProject'
icon.setAttribute('data-key',name)
$delProject.appendChild(icon)

//Event to delete from Storage
icon.addEventListener('click',deleteProject)


//Button to create form to add activities to the project
//Check and delete previous buttons 
const footer = document.querySelector('#projectFooter')
while (footer.firstChild){
    footer.removeChild(footer.firstChild)
}

//Creating add activities button
const addActivitiesButton = document.createElement('button')
addActivitiesButton.id = 'addActivitiesButton'
addActivitiesButton.setAttribute('data-key',name)
addActivitiesButton.textContent = 'Add Activity'
addActivitiesButton.addEventListener('click',createFormToAddActivities)
footer.appendChild(addActivitiesButton)
}

export{viewProject}