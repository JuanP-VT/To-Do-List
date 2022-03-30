import delIcon from './img/delIcon.png'
import allIconImg from './img/all.png'
import file1 from './img/file-tree1.png'
import file2 from './img/file-tree2.png'
import file3 from './img/file-tree3.png'

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

const summaryDiv = document.createElement('div')
summaryDiv.id = 'summaryDiv'

sidebar.appendChild(summaryDiv)

const summaryHeader = document.createElement('div')
summaryHeader.id = 'summaryHeader'
summaryHeader.textContent = 'Summary'

summaryDiv.appendChild(summaryHeader)

const summaryContent = document.createElement('div')
summaryContent.id = 'summaryContent'

summaryDiv.appendChild(summaryContent)

const all = document.createElement('div')
all.classList.add('options')
all.id = 'all'



summaryContent.appendChild(all)

const allIcon = document.createElement('div')
allIcon.classList.add('iconSide')

const alltaskicon = new Image()
alltaskicon.src = allIconImg

allIcon.appendChild(alltaskicon)


const allText = document.createElement('div')
allText.classList.add('textSide')
allText.textContent = 'All Activities'

all.appendChild(allIcon)
all.appendChild(allText)

const lowImportance = document.createElement('div')
lowImportance.id = 'lowImportance'
lowImportance.classList.add('options')

summaryContent.appendChild(lowImportance)

const lowIcon = document.createElement('div')
lowIcon.classList.add('iconSide')
const lowIconImg = new Image()
lowIconImg.src = file1

lowIcon.appendChild(lowIconImg)

const lowText = document.createElement('div')
lowText.classList.add('textSide')
lowText.textContent = 'Low Importance'

lowImportance.appendChild(lowIcon)
lowImportance.appendChild(lowText)


const midImportance = document.createElement('div')
midImportance.id = 'lowImportance'
midImportance.classList.add('options')

summaryContent.appendChild(midImportance)

const midIcon = document.createElement('div')
lowIcon.classList.add('iconSide')
const midIconImg = new Image()
midIconImg.src = file2

midIcon.appendChild(midIconImg)

const midText = document.createElement('div')
midText.classList.add('textSide')
midText.textContent = 'Mid Importance'

midImportance.appendChild(midIcon)
midImportance.appendChild(midText)
//
const highImportance = document.createElement('div')
highImportance.id = 'lowImportance'
highImportance.classList.add('options')

summaryContent.appendChild(highImportance)

const highIcon = document.createElement('div')
highIcon.classList.add('iconSide')
const highIconImg = new Image()
highIconImg.src = file3

highIcon.appendChild(highIconImg)

const highText = document.createElement('div')
highText.classList.add('textSide')
highText.textContent = 'High Importance'

highImportance.appendChild(highIcon)
highImportance.appendChild(highText)
//

sidebarHeader.id = 'sidebarHeader'
sidebarHeader.textContent = 'Projects'
sidebar.appendChild(sidebarHeader)

const projects = document.createElement('div')
projects.id = 'projects'


const newProject = document.createElement('div')
newProject.id = 'newProject'
sidebar.appendChild(newProject)
const newProjectTitle = document.createElement('button')
newProjectTitle.textContent = 'Create New Project'
newProject.appendChild(newProjectTitle)
newProjectTitle.id = 'newProjectTitle'
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


const toDo = document.createElement('div')
toDo.id = 'toDo'

viewProject.appendChild(toDo)

const footer = document.createElement('div')
footer.id = 'projectFooter'
viewProject.appendChild(footer)

}

export {initPage}