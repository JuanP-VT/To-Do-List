function activityFactory(name,details,date,importance,done,from){
    return{
        name,
        details,
        date,
        importance,
        done,
        from,
    }
}

export {activityFactory}