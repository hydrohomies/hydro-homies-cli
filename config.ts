import dotenv from 'dotenv'

dotenv.config()
module.exports = {
  apiKey: process.env.apiKey
  masterKey: process.env.API_KEY,
  port: process.env.PORT
};
