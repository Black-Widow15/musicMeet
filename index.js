import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './server/routes.js'
const app = express()

const port = 8000

app.use(cors)
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
    `Magic happens on port ${port}`
})