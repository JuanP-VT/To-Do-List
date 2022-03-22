import { form } from "./domContent"
import { addProject } from "./addProject"
import {delForm} from "./delForm"

function makeform(){
   const newProject = document.querySelector('#newProject')
   newProject.appendChild(form)
const closeIcon = document.querySelector('#close')
closeIcon.addEventListener('click',delForm)
const submit = document.querySelector('#submit')
submit.addEventListener('click',addProject)
}

export {makeform}