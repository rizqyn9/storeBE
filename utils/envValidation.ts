import {
    cleanEnv, str, port
} from 'envalid'

export function validateENV() {
    cleanEnv(process.env, {
        PORT:port(),
        MONGODB_URI:str()
    })
}