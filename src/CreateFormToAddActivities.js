import { closeAddActivitiesForm } from "./CloseAddActivitiesForm"
import { activitiesFormDiv } from "./domContent"
import { saveActivity } from "./saveActivity"

function createFormToAddActivities(){
    const footer = document.querySelector('#projectFooter')
    footer.appendChild(activitiesFormDiv)

    //Load events to the form

    //Submit Activity
    const addActivityButton = document.querySelector('#addActivity')
    const projectKey = this.getAttribute('data-key')
    addActivityButton.setAttribute('data-key', projectKey)
    addActivityButton.addEventListener('click',saveActivity)

    //Close Form
    const button = document.querySelector('#newCloseIcon')
    button.addEventListener('click',closeAddActivitiesForm)
}

export {createFormToAddActivities}