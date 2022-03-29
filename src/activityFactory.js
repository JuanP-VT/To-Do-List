function activityFactory(name,details,date,importance){
    return{
        name,
        details,
        date,
        importance
    }
}

export {activityFactory}