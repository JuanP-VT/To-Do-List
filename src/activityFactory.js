function activityFactory(name,details,date,importance,done){
    return{
        name,
        details,
        date,
        importance,
        done
    }
}

export {activityFactory}