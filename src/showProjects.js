import { viewProject } from "./viewProject"

//shows in
function showProjects(){
    const projects = document.querySelector('#projects')
    while (projects.firstChild){
        projects.removeChild(projects.firstChild)
    }

    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index)
        const $newProject = document.createElement('div')
        $newProject.classList.add('newProject')
        $newProject.textContent = key
        projects.appendChild($newProject)
        $newProject.addEventListener('click',viewProject)
    }
}

export {showProjects}