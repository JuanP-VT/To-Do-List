import { closeAddProjectForm } from "./CloseAddProjectForm"
import { newProjectFormDiv } from "./domContent"
import { saveProject } from "./saveProject"

function createFormForNewProject(){
    const newProject = document.querySelector('#newProject')
    newProject.append(newProjectFormDiv)


    //Adding events to submit
    const submitBTN = document.querySelector('#submit')
    submitBTN.addEventListener('click',saveProject)
    //Adding events to close
    const closeIcon = document.querySelector('#closeNewProjectForm')
    closeIcon.addEventListener('click',closeAddProjectForm)

}
export {createFormForNewProject}