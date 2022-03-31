import acorn from "acorn";
import { completeActivity } from "./changeActivityToCompleted";
import { deleteActivity } from "./deleteActivity";
import { actCard, cardDate, cardDeleteIcon, cardDetails, cardName, chkbtn } from "./domContent";

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
        cardName.textContent = act[index].name
        cardDetails.textContent = act[index].details
        cardDate.textContent = act[index].date
        cardDeleteIcon.setAttribute('data-key',project.name)
        cardDeleteIcon.setAttribute('data-index',index)
    //Button to mark activities as completed
    chkbtn.setAttribute('data-key',projectKey)
    chkbtn.setAttribute('data-index',index)

    //Button to delete activity from project
        cardDeleteIcon.addEventListener('click',deleteActivity)
    

    //Applying card style for completion status
    console.log(act[index].done)
    if(act[index].done == true){
        actCard.classList.add('complete')
    }
    if(act[index].done == false){
        actCard.classList.remove('complete')
    }
    
    //Applying card styles for importance
    if(act[index].importance == 'Low'){
        actCard.classList.add('Low')
        actCard.classList.remove('Mid')
        actCard.classList.remove('High')
    }
    if(act[index].importance == 'Mid'){
        actCard.classList.add('Mid')
        actCard.classList.remove('Low')
        actCard.classList.remove('High')
    }
    if(act[index].importance == 'High'){
        actCard.classList.add('High')
        actCard.classList.remove('Low')
        actCard.classList.remove('Mid')
    }

    toDo.appendChild(actCard.cloneNode(true))

    }
//Loop to add event listeners
    const deleteiconss = document.querySelectorAll('.cardDeleteIcon')
    deleteiconss.forEach(element => {
        element.addEventListener('click',deleteActivity)
    });

    const markComplete = document.querySelectorAll('.chkbtn')
    markComplete.forEach(element => {
        element.addEventListener('click',completeActivity)
    });

    

}

export {displayProjectActivities}


