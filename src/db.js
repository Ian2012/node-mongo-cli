const {connect, connection} = require('mongoose')

const connectDB = async () => {
    await connect('mongodb://localhost/taskcli')
}

connection.on('error', err => {
    console.log(err)
})

module.exports = {
    connectDB, connection
}
