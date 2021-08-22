import {
    cleanEnv, str, port
} from 'envalid'

export function validateENV() {
    return cleanEnv(process.env, {
        PORT:port(),
        MONGODB_URI:str()
    })
}

export const useENV = cleanEnv(process.env, {
    PORT:port(),
    MONGODB_URI:str()
})

