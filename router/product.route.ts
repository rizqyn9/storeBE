import * as express from 'express'
import {CallbackError} from "mongoose"
import {IPriceList, IProducts} from '../interfaces/products.interface'
import Products from '../models/products.model'

let route = express.Router()

route.get('/' , (req, res) => {
    res.json({
        msg : "products"
    })
})

route.post('/add', (req, res) => {
    // let {} = req.body
    console.log(req.body)
    let newProduct = new Products({
        ...req.body
    }).save((err : CallbackError, data:IProducts) => {

        console.log(data)
    })
    res.json({
        msg:"add product"
    })
})

export default route