const mongoose = require('mongoose')

class Mongo {
    constructor(){}
    
    initDatabase() {
    
        const uri = `mongodb+srv://angel-giolitti-database:${process.env.PASS_DATABASE}@cluster0.kgzupue.mongodb.net/?retryWrites=true&w=majority`
        const connectDb = async ()=>{ 
            await mongoose.connect(uri,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log('Base de datos conectada'))
        .catch(e => console.log('error db:', e))
        }

        connectDb()
    
    }

}

const mongo = new Mongo()
module.exports = mongo

 