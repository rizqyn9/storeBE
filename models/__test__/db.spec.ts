import {MongoMemoryServer} from 'mongodb-memory-server'
import mongoose from 'mongoose'

describe('Test DB', function () {
    let mongoServer;
    beforeAll(async ()=> {
        mongoServer = new MongoMemoryServer();
        let URI = await mongoServer.getUri();

        mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log("Success connect")
        })
    })
});