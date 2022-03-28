import {projectFactory} from './ProjectFactory'

function saveProject(ev){
    ev.preventDefault()

    //Get Input Values
    const name = document.querySelector('#nameInput').value

    //Set Project as an Object
    const Project = projectFactory(name,[])
    console.log(Project)

    //Save to localStorage
    localStorage.setItem(name,JSON.stringify(Project))

    //Refresh Projects
}

export {saveProject}