import { deleteActivity } from "./deleteActivity";
import { actCard, cardDate, cardDeleteIcon, cardDetails, cardName } from "./domContent";

function displayProjectActivities(projectKey){
    //Clear activitie's screen
    const toDo = document.querySelector('#toDo')
    while (toDo.firstChild){
        toDo.removeChild(toDo.firstChild)
    }
    //get project from localstorage
    const project = JSON.parse(localStorage.getItem(projectKey))
    const act = project.activities


    //Loop through all project activities and create a card for each activity
    for (let index = 0; index < act.length; index++) {
        console.log(act[index].name)
        cardName.textContent = act[index].name
        cardDetails.textContent = act[index].details
        cardDate.textContent = act[index].date
        cardDeleteIcon.setAttribute('data-key',project.name)
        cardDeleteIcon.setAttribute('data-index',index)
        cardDeleteIcon.addEventListener('click',deleteActivity)
        toDo.appendChild(actCard.cloneNode(true))
    }
    //Loop to add event listeners
    const deleteiconss = document.querySelectorAll('.cardDeleteIcon')
    deleteiconss.forEach(element => {
        element.addEventListener('click',deleteActivity)
    });


    

}

export {displayProjectActivities}


