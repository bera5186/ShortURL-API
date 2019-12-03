const mongoose = require('mongoose')
const config = require('config')

let db = config.get('mongoURIProd')

if (config.get('env') === "dev") {
    db = config.get('mongoURIDev')
}


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        })

        console.log('DB connected ....')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB