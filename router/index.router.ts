import * as express from 'express'
import ProductRoutes from './product.route'

const router = express.Router()

router.get('/', (req, res) => {
    console.log("path /")
})

router.use("/product", ProductRoutes)

export  default router