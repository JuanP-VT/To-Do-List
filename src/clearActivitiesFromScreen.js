function clearActivitiesFromScreen(){
    const toDo = document.querySelector('#toDo')
 while(toDo.firstChild){
     toDo.removeChild(toDo.firstChild)
}
}
export {clearActivitiesFromScreen}