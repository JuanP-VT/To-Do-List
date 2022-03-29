import { createFormForNewProject } from "./CreateFormForNewProject"

function loadEvents(){
    const newProjectBTN = document.querySelector('#newProjectTitle')
    newProjectBTN.addEventListener('click',createFormForNewProject)
}

export {loadEvents}


