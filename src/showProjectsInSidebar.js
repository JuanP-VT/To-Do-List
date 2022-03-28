function showProjectsInSidebar(){
    const sidebarProjects = document.querySelector('#projects')
    //Clear Sidebar 
    while (sidebarProjects.firstChild){
        sidebarProjects.removeChild(sidebarProjects.firstChild)
    }
    //Loop through localstorage keys
    for (let index = 0; index < localStorage.length; index++) {
        const newP = document.createElement('div')
        newP.classList.add('sidebarProject')

        const key = localStorage.key(index)
        newP.textContent = key
        newP.setAttribute('data-key',key)
        sidebarProjects.appendChild(newP)
        
    }
}

export{showProjectsInSidebar}