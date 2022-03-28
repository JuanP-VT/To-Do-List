function closeAddProjectForm(){
    const parent = document.querySelector('#newProject')
    const Form = document.querySelector('#newProjectFormDiv')
    parent.removeChild(Form)
}

export {closeAddProjectForm}