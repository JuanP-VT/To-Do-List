import { activityFactory } from "./activityFactory"
import { refreshProjectActivities } from "./refreshProjectActivities"


function addActivityToObject(storedProject){
    event.preventDefault()
    console.log(storedProject)
    const storedProjectKey = storedProject.name
    const activity = document.querySelector('#activityName').value
    const details = document.querySelector('#activityDetails').value
    const date = document.querySelector('#activityDate').value
    const important = document.querySelector('#select').value
//creates new activity from the user input
    const newActivity = activityFactory(activity,details,date,important)
    console.log(newActivity)
//gets the reference Storedproject and convert it into object
    const project = JSON.parse(localStorage.getItem(storedProjectKey))
    const task = project.activities
    task.push(newActivity)
    console.log(project)
//Save back to local storage
localStorage.setItem(storedProjectKey, JSON.stringify(project))
console.log(project)
//Refresh activities
console.log(project)
refreshProjectActivities(project);

document.forms[0].reset();
const forms = document.forms[1]
if (forms){
    document.forms[1].reset();
}


}

export{addActivityToObject}