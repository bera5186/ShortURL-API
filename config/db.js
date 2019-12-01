const mongoose = require('mongoose')
const config = require('config')

const db = config.get('mongoURIProd')

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