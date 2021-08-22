import mongoose, {Mongoose} from 'mongoose'
import {useENV} from './envValidation'

class MongoConnect {
    public static async connect(){
        mongoose.connect(useENV.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then((err) => {
            console.log("Connected to database")
        }).catch(err => {
            console.log(err)
        })
    }
}

export default MongoConnect;
