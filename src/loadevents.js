import { makeform } from "./makeform"

function loadEvents(){
    const newProjectT = document.querySelector('#newProjectTitle')
    newProjectT.addEventListener('click',makeform)
}

export {loadEvents}