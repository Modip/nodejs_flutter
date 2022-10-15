const express = require("express")

const bodyParser = require('body-parser');
const { connect } = require('./database');

const apiBookRoutes = require('./routes/bookRoute')
const apiUserRoutes = require('./routes/userRoute')

const app = express()

const port = process.env.PORT || 8080

app.use(express.json())

app.use('/api/books', apiBookRoutes)
app.use('/api/users', apiUserRoutes)


app.listen(port, async () => { 
    console.log(`Listen on port ${port}`)
    await connect() })