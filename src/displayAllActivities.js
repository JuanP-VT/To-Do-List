import { clearContentScreen } from "./clearContentScreen";
import { actCard, cardDate,cardDetails, cardName,cardDelete} from "./domContent2";

function displayAllActivities(){
    clearContentScreen()
//Create array to save all activities from all stored project
const allActivities = []

//Loop through all localstorage projects to get all activities
for (let index = 0; index < localStorage.length; index++) {
    let projectKey = localStorage.key(index)
    let project = JSON.parse(localStorage.getItem(projectKey))
    console.log(project)
    let projectActivities = project.activities
    allActivities.push(projectActivities)
    
}
    //Append all activities as DOM elements
    const flatArray = allActivities.flat()
    flatArray.forEach(element => {
        cardName.textContent = element.name
        cardDetails.textContent = element.details
        cardDate.textContent = element.date
        cardDelete.textContent = 'Project: '+element.from

    //Remove unnecesary DOM elements

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

export{displayAllActivities}