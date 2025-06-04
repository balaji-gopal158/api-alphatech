const mongoose = require('mongoose');

const connectDataBase = ()=>{
    mongoose.connect(process.env.database_Uri).then((con)=>{
      console.log('DB connected' +   con.connection.host)
    })
}

module.exports = connectDataBase;