const express = require('express')
const connectDB = require('./config/db')
const path = require("path")


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended : false }))
app.set("views", path.join(__dirname, "views"))
app.use("/js", express.static(path.join(__dirname, 'public/js')))
app.set("view engine", "hbs")


// connect to database
connectDB()

// routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

app.listen(PORT , () => console.log(`Server running at ${PORT}`))