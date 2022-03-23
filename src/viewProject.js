import { clearActivitiesFromScreen } from './clearActivitiesFromScreen';
import { closeForm } from './closeForm'
import { displayProjectActivities } from './displayProjectActivities';
import {divForm} from './domContent'
import { makeActivityForm } from './makeActivityForm'
function viewProject(){
    clearActivitiesFromScreen()
    closeForm();
    

    console.log(this)
    const keyName = this.textContent
    console.log(keyName)
    const storedProject = JSON.parse(localStorage.getItem(keyName))
    console.log(storedProject)

    displayProjectActivities(storedProject)

    //Display Current Project Name
const projectName = document.querySelector('#projectName')
projectName.textContent =storedProject.name

//Adding FormButton
const footer = document.querySelector('#projectFooter')
const btn = document.createElement('button')
btn.textContent = 'Add Activity'
btn.id = 'addActivity'

if(footer.firstChild){
    footer.removeChild(footer.firstChild)
}
footer.appendChild(btn)
btn.addEventListener('click',makeActivityForm.bind(event,storedProject))

}

export {viewProject}