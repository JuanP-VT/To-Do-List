function clearContentScreen(){
//Clear content screen
    //Change Titlte
    const title = document.querySelector('#projectName')
    title.textContent = 'All Activities'
        //Remove deleteIcon
        const delDiv = document.querySelector('#delProject')
        if(delDiv.firstChild){
            delDiv.removeChild(delDiv.firstChild)
        }
        //Remove all activities
    const toDo = document.querySelector('#toDo')
    while (toDo.firstChild){
        toDo.removeChild(toDo.firstChild)
    }
        //Remove footer
        const footer = document.querySelector('#projectFooter')
        if(footer.firstChild){
            footer.removeChild(footer.firstChild)
        }
    

}

export{clearContentScreen}