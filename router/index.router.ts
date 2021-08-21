import * as express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    console.log("path /")
})

export  default router