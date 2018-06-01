const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {router} = require('./server/routes.js')
const app = express()
const path = require('path')
const db = require ('./server/database/connection.js')

const port = 8000

app.use(express.static(path.join(__dirname + '/client/dist')))



app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Magic happens on port ${port}`)
})