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

sidebar.appendChild(projects)


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