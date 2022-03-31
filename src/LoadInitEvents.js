import { createFormForNewProject } from "./CreateFormForNewProject"
import { displayAllActivities } from "./displayAllActivities"

function loadEvents(){
    const newProjectBTN = document.querySelector('#newProjectTitle')
    newProjectBTN.addEventListener('click',createFormForNewProject)

    const allBtn = document.querySelector('#all')
    allBtn.addEventListener('click',displayAllActivities)
}

export {loadEvents}


