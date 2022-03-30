function completeActivity(){
    const projectKey = this.getAttribute('data-key')
    const actIndex = this.getAttribute('data-index')
    console.log(this)

//Get project from localstorage
const myProject = JSON.parse(localStorage.getItem(projectKey))

//Change activity completion status
myProject.activities[actIndex].done
if (myProject.activities[actIndex].done == false){
    myProject.activities[actIndex].done = true
    
}
else if (myProject.activities[actIndex].done == true){
    myProject.activities[actIndex].done = false
    
}
console.log(myProject)

//Save project back to localstorage
localStorage.setItem(projectKey,JSON.stringify(myProject))
}

export{completeActivity}

