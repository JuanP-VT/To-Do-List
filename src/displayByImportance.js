import { clearContentScreen } from "./clearContentScreen"
import { actCard, cardDate,cardDetails, cardName,cardDelete} from "./domContent2";


function displayLowImportance(){
    //Clear screen
    clearContentScreen()
    const projectname = document.querySelector('#projectName')
    projectname.textContent = 'Low Importance'

    //Create array for to store  low importance activities
    const lowImportanceActivities = []

    //Loop through localstorage to find see all project's activities
    for (let index = 0; index < localStorage.length; index++) {
        let projectKey = localStorage.key(index)
        let project = JSON.parse(localStorage.getItem(projectKey))
        const activities = project.activities
            //Loop through this project activities to find low importance activities
            activities.forEach(element => {
                if(element.importance == 'Low'){
                    lowImportanceActivities.push(element)
                }
            });
    }
    //Append activities as DOM elements
    console.log(lowImportanceActivities)
    lowImportanceActivities.forEach(element => {
        
        cardName.textContent = element.name
        cardDetails.textContent = element.details
        cardDate.textContent = element.date
        cardDelete.textContent = 'Project: '+element.from

            //Applying card style for completion status
    if(element.done == true){
        actCard.classList.add('complete')
    }
    if(element.done == false){
        actCard.classList.remove('complete')
    }

            //Applying card styles for importance
    if(element.importance == 'Low'){
        actCard.classList.add('Low')
        actCard.classList.remove('Mid')
        actCard.classList.remove('High')
    }
    if(element.importance == 'Mid'){
        actCard.classList.add('Mid')
        actCard.classList.remove('Low')
        actCard.classList.remove('High')
    }
    if(element.importance == 'High'){
        actCard.classList.add('High')
        actCard.classList.remove('Low')
        actCard.classList.remove('Mid')
    }
        toDo.appendChild(actCard.cloneNode(true))
    });
    
}

export{displayLowImportance}


//


function displayMidImportance(){
    //Clear screen
    clearContentScreen()
    const projectname = document.querySelector('#projectName')
    projectname.textContent = 'Mid Importance'

    //Create array for to store  Mid importance activities
    const midImportanceActivities = []

    //Loop through localstorage to find see all project's activities
    for (let index = 0; index < localStorage.length; index++) {
        let projectKey = localStorage.key(index)
        let project = JSON.parse(localStorage.getItem(projectKey))
        const activities = project.activities
            //Loop through this project activities to find Mid importance activities
            activities.forEach(element => {
                if(element.importance == 'Mid'){
                    midImportanceActivities.push(element)
                }
            });
    }
    //Append activities as DOM elements
    console.log(midImportanceActivities)
    midImportanceActivities.forEach(element => {
        
        cardName.textContent = element.name
        cardDetails.textContent = element.details
        cardDate.textContent = element.date
        cardDelete.textContent = 'Project: '+element.from

            //Applying card style for completion status
    if(element.done == true){
        actCard.classList.add('complete')
    }
    if(element.done == false){
        actCard.classList.remove('complete')
    }

            //Applying card styles for importance
    if(element.importance == 'Low'){
        actCard.classList.add('Low')
        actCard.classList.remove('Mid')
        actCard.classList.remove('High')
    }
    if(element.importance == 'Mid'){
        actCard.classList.add('Mid')
        actCard.classList.remove('Low')
        actCard.classList.remove('High')
    }
    if(element.importance == 'High'){
        actCard.classList.add('High')
        actCard.classList.remove('Low')
        actCard.classList.remove('Mid')
    }
        toDo.appendChild(actCard.cloneNode(true))
    });
    
}

export{displayMidImportance}

//
function displayHighImportance(){
    //Clear screen
    clearContentScreen()
    const projectname = document.querySelector('#projectName')
    projectname.textContent = 'High Importance'

    //Create array for to store  low importance activities
    const highImportanceActivities = []

    //Loop through localstorage to find see all project's activities
    for (let index = 0; index < localStorage.length; index++) {
        let projectKey = localStorage.key(index)
        let project = JSON.parse(localStorage.getItem(projectKey))
        const activities = project.activities
            //Loop through this project activities to find high importance activities
            activities.forEach(element => {
                if(element.importance == 'High'){
                    highImportanceActivities.push(element)
                }
            });
    }
    //Append activities as DOM elements
    console.log(highImportanceActivities)
    highImportanceActivities.forEach(element => {
        
        cardName.textContent = element.name
        cardDetails.textContent = element.details
        cardDate.textContent = element.date
        cardDelete.textContent = 'Project: '+element.from

            //Applying card style for completion status
    if(element.done == true){
        actCard.classList.add('complete')
    }
    if(element.done == false){
        actCard.classList.remove('complete')
    }

            //Applying card styles for importance
    if(element.importance == 'Low'){
        actCard.classList.add('Low')
        actCard.classList.remove('Mid')
        actCard.classList.remove('High')
    }
    if(element.importance == 'Mid'){
        actCard.classList.add('Mid')
        actCard.classList.remove('Low')
        actCard.classList.remove('High')
    }
    if(element.importance == 'High'){
        actCard.classList.add('High')
        actCard.classList.remove('Low')
        actCard.classList.remove('Mid')
    }
        toDo.appendChild(actCard.cloneNode(true))
    });
    
}

export{displayHighImportance}
