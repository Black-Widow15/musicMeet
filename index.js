const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {router} = require('./server/routes.js')
const app = express()
const path = require('path')

const port = 8000

// app.use(express.static(__dirname + '/../client/dist'))

var DIST_DIR = path.join(__dirname, "/../client/dist")

app.get('/', (req, res) => {
    res.send('home page')
})
app.use(express.static(DIST_DIR));


app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Magic happens on port ${port}`)
})