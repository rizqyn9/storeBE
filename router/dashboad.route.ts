import * as express from 'express'
const router = express.Router()

router.get("/",(req, res) => {
    res.json({
        pler :123
    })
})

export default router