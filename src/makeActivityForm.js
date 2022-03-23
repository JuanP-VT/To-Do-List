import { divForm } from "./domContent"
import { addActivityToObject } from "./addActivityToObject"


function makeActivityForm(storedProject){
    console.log(storedProject)
    const viewProject = document.querySelector('#viewProject')
    viewProject.appendChild(divForm)
    const btn = document.querySelector('#activitySubmit')
    btn.addEventListener('click',addActivityToObject.bind(event,storedProject))
}

export {makeActivityForm}