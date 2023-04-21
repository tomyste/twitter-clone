const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        
    mongoose.connect(process.env.DB_CNN);
        console.log("DB ONLINE")

    } catch (error){
        console.log(error);
        throw new Error("Error a la hora de iniciar la DB")
    }
}


module.exports = {
    dbConnection
}
