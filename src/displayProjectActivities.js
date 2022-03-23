import { clearActivitiesFromScreen } from "./clearActivitiesFromScreen";
import { actDiv, divDate, divDetails, divName } from "./domContent"

function displayProjectActivities(storedProject){
    console.log(storedProject)
    const toDo = document.querySelector('#toDo')
    clearActivitiesFromScreen()
//loop through project's activities
    storedProject.activities.forEach(element => {
        console.log(actDiv.childNodes)
       
        divName.textContent=element.name
        divDetails.textContent = element.details
        divDate.textContent = element.date

//If the user does not imput anything use placeholder
        if (element.date == ''){
            divDate.textContent = 'No date'
        }
        if (element.name == ''){
            divName.textContent = 'No Name'
        }
//Change Color of the card depending on the activity importance
if(element.important == 'low'){
    actDiv.classList.add('low')
    actDiv.classList.remove('mid')
    actDiv.classList.remove('high')
    
}
if (element.important == 'mid'){
    actDiv.classList.add('mid')
    actDiv.classList.remove('low')
    actDiv.classList.remove('high')
    
}
if (element.important == 'high'){
    actDiv.classList.add('high')
    actDiv.classList.remove('low')
    actDiv.classList.remove('mid')
    }

        toDo.appendChild(actDiv.cloneNode(true))
    });


}

export {displayProjectActivities}