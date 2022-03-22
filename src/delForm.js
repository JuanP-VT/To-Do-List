function delForm(){
    console.log('Form')
    const form = document.querySelector('#form')
    form.parentElement.removeChild(form)
}

export {delForm}