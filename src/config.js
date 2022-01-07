require('dotenv').config()

module.exports = {
    MONGODB_URI: process.env.MONGODB_URL || "mongodb://localhost/taskcli"
}
