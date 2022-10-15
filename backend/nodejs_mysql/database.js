const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
   'nodejs_flutter','root',
    '',{
        dialect : "mysql",
        host : "localhost"
    }

)

const connect = async ()=>{
    try {
        await sequelize.authenticate();
        console.log("Successfully connected");
    }
    catch(error){
        console.log(error)
    }
}

module.exports = { sequelize, connect };