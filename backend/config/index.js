const dotEnv  = require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    SECRET: process.env.SECRET
}