import { activityFactory } from "./activityFactory"

function saveActivity(){
//Get input values
    const name = document.querySelector('#actNameInput').value
    const details = document.querySelector('#actDetails').value
    const date = document.querySelector('#actDate').value
    const importance = document.querySelector('#select').value

    //Set Activity as an Object
    const activity = activityFactory(name,details,date,importance)
    
    //Get project from localstorage
    const projectKey = this.getAttribute('data-key')
    const Project = (JSON.parse(localStorage.getItem(projectKey)))

    //Save activity to project
    Project.activities.push(activity)

    //Save object back to LocalStorage
    localStorage.setItem(projectKey,JSON.stringify(Project))
    

}

export {saveActivity}