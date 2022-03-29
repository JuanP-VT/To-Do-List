function closeAddActivitiesForm(){
    const footer = document.querySelector('#projectFooter')
    const form = document.querySelector('#activitiesFormDiv')

    footer.removeChild(form)


    }


export{closeAddActivitiesForm}