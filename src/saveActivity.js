import { activityFactory } from "./activityFactory"
import { closeAddActivitiesForm } from "./CloseAddActivitiesForm"
import { displayProjectActivities } from "./displayProjectActivities"

function saveActivity(){
//Get input values
    let name = document.querySelector('#actNameInput').value
    const details = document.querySelector('#actDetails').value
    let date = document.querySelector('#actDate').value
    const importance = document.querySelector('#select').value
    const projectKey = this.getAttribute('data-key')

//Adding Placeholder for empty fields
    if (name == ''){
        name = 'No Name Set'
    }

    if (date == ''){
        date = 'No Date Set'
    }
    //Set Activity as an Object
    const activity = activityFactory(name,details,date,importance,false,projectKey)
    
    //Get project from localstorage

    const Project = (JSON.parse(localStorage.getItem(projectKey)))

    //Save activity to project
    Project.activities.push(activity)

    //Save object back to LocalStorage
    localStorage.setItem(projectKey,JSON.stringify(Project))
    
    //Refresh cctivities to show the new one
    displayProjectActivities(projectKey)

    //close add activities form
    closeAddActivitiesForm()

}

export {saveActivity}