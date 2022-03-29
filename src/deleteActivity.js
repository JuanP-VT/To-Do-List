import { displayProjectActivities } from "./displayProjectActivities"

function deleteActivity(){

    //Getting Localstorage project and activity index
const projectKey = this.getAttribute('data-key')
const actIndex = this.getAttribute('data-index')
console.log('From Project ' + projectKey + ' and Index ' + actIndex)

//Get item from localstorage
const project = JSON.parse(localStorage.getItem(projectKey))
//Delete activity from project
project.activities.splice(actIndex,1)
//Save changes back to localstorage
localStorage.setItem(projectKey,JSON.stringify(project))
//Refresh activities
displayProjectActivities(projectKey)
}

export {deleteActivity}