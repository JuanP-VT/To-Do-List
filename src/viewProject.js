import { closeForm } from './closeForm'
import {divForm} from './domContent'
import { makeActivityForm } from './makeActivityForm'
function viewProject(){
    closeForm();



    console.log(this)
    const keyName = this.textContent
    console.log(keyName)
    const storedProject = JSON.parse(localStorage.getItem(keyName))
    console.log(storedProject)



//Display Name
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
btn.addEventListener('click',makeActivityForm)

}

export {viewProject}