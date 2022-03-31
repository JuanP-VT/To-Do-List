import { createFormForNewProject } from "./CreateFormForNewProject"
import { displayAllActivities } from "./displayAllActivities"
import { displayHighImportance, displayLowImportance, displayMidImportance } from "./displayByImportance"

function loadEvents(){
    const newProjectBTN = document.querySelector('#newProjectTitle')
    newProjectBTN.addEventListener('click',createFormForNewProject)

    const allBtn = document.querySelector('#all')
    allBtn.addEventListener('click',displayAllActivities)

    const lowImportance = document.querySelector('#lowImportance')
    lowImportance.addEventListener('click',displayLowImportance)

    const midImportance = document.querySelector('#midImportance')
    midImportance.addEventListener('click',displayMidImportance)

    const highImportance = document.querySelector('#highImportance')
    highImportance.addEventListener('click',displayHighImportance)
}

export {loadEvents}


