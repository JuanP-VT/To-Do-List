import delIcon from './img/delIcon.png'
function initPage(){
    const main = document.querySelector('#main')

const header = document.createElement('div')
header.textContent = 'My To Do List'
header.id = 'header'

main.appendChild(header)

const content = document.createElement('div')
content.id = 'content'

main.appendChild(content)

const sidebar = document.createElement('div')
sidebar.id = 'sidebar'
const sidebarHeader = document.createElement('div')

content.appendChild(sidebar)

sidebarHeader.id = 'sidebarHeader'
sidebarHeader.textContent = 'Projects'
sidebar.appendChild(sidebarHeader)

const projects = document.createElement('div')
projects.id = 'projects'


const newProject = document.createElement('div')
newProject.id = 'newProject'
sidebar.appendChild(newProject)
const newProjectTitle = document.createElement('div')
newProjectTitle.textContent = 'Create New Project'
newProject.appendChild(newProjectTitle)
newProjectTitle.id = 'newProjectTitle'
sidebar.appendChild(projects)
/// placeholders
const p1 = document.createElement('div')
p1.textContent = 'placeholder'
projects.appendChild(p1)

const p2 = document.createElement('div')
p2.textContent = 'placeholder'
projects.appendChild(p2)

const p3 = document.createElement('div')
p3.textContent = 'placeholder'
projects.appendChild(p3)
/// placeholders



const viewProject = document.createElement('div')
viewProject.id = 'viewProject'

content.append(viewProject)

const projectHeader = document.createElement('div')
projectHeader.id = 'projectHeader'

viewProject.appendChild(projectHeader)

const projectName = document.createElement('div')
projectName.textContent ='Placeholder'
projectName.id = 'projectName'
projectHeader.appendChild(projectName)

const delProject = document.createElement('div')
delProject.id = 'delProject'
projectHeader.appendChild(delProject)

projectHeader.appendChild(delProject)

const myIcon = new Image()
myIcon.src = delIcon
myIcon.id = 'icon'

delProject.append(myIcon)

const toDo = document.createElement('div')
toDo.id = 'toDo'

viewProject.appendChild(toDo)
}

export {initPage}