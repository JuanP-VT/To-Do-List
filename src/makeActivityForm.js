import { divForm } from "./domContent"

function makeActivityForm(){
    const viewProject = document.querySelector('#viewProject')
    viewProject.appendChild(divForm)
}

export {makeActivityForm}