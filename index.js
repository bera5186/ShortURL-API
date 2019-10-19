const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended : false }))

// connect to database
connectDB()

// routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

app.listen(PORT , () => console.log(`Server running at ${PORT}`))