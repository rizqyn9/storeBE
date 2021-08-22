import "dotenv/config"
import express from 'express'
import MongoConnect from "./utils/MongoConnect";
import Dashboard from './router/dashboad.route'
import IndexRouter from './router/index.router'
import {validateENV} from './utils/envValidation'

// validate ENV
const valid = validateENV();

// Mongo connect
MongoConnect.connect()

const app = express()

app.use(express.json())

app.get('/', Dashboard)
app.use('/api', IndexRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})