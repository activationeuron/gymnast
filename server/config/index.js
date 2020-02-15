import Dotenv from 'dotenv'
Dotenv.config()
export default {
    databaseUrl: process.env.DATABASE_URL
}
