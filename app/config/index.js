/////////////////////////////////
// THIS Read the var in the .env file,
// If can't find value then get a default value
/////////////////////////////////
const dotenv = require('dotenv');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config();

module.exports = {
    port: process.env.PORT || 8000,
    api: {
        prefix: process.env.API_PREFIX || '/api/v1'
    }
}