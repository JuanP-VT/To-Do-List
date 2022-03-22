function addProject(ev){
    ev.preventDefault()
    let projectName = document.getElementById('nameInput').value
    let project = {
        name: projectName
    }
    localStorage.setItem(projectName ,JSON.stringify(project))
    document.forms[0].reset();
}

export {addProject}