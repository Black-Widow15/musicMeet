const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {router} = require('./server/routes.js')
const app = express()

const port = 8000

app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Magic happens on port ${port}`)
})