import { showProjectsInSidebar } from "./showProjectsInSidebar"

function deleteProject(){
const key = this.getAttribute('data-key')
localStorage.removeItem(key)

 //refresh projects
showProjectsInSidebar()
}

export {deleteProject}