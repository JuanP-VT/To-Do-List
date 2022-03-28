import {projectFactory} from './ProjectFactory'
import { showProjectsInSidebar } from './showProjectsInSidebar'

function saveProject(ev){
    ev.preventDefault()

    //Get Input Values
    const name = document.querySelector('#nameInput').value

    // Logic to prevent saving Unnamed projects
    if (name == ''){
        return
    }
    //Set Project as an Object
    const Project = projectFactory(name,[])
    console.log(Project)

    //Save to localStorage
    localStorage.setItem(name,JSON.stringify(Project))

    //Refresh Projects
    showProjectsInSidebar()
}

export {saveProject}