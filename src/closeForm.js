function closeForm(){
    const main = document.querySelector('#viewProject')
    const form = document.querySelector('#divForm')
    if (main.contains(form)){
        main.removeChild(form)
    }
    
}

export {closeForm}


