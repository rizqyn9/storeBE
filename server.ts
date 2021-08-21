import "dotenv/config"
import express from 'express'
import mongoose from 'mongoose'
import Dashboard from './router/dashboad.route'
import IndexRouter from './router/index.router'
import {validateENV} from './utils/envValidation'

// validate ENV
validateENV();

//Connect to DB
// @ts-ignore
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connected to database")
})

const app = express()

app.get('/', Dashboard)
app.use('/api', IndexRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})