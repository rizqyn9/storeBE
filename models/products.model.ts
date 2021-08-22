import {Schema, model, Model} from 'mongoose'
import {IProducts, IPriceList} from '../interfaces/products.interface'

const ProductSchema : Schema = new Schema({
    productName     : {type : String},
    productTotal    : {type : Number},
    imgURL          : [],
    productPriceList : [],
    category        : [],
})

const Products = model<IProducts>("Product" ,ProductSchema )

export default Products;

