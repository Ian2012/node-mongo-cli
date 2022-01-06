const {Schema, model} = require('mongoose')

module.exports = model('Task', new Schema({
    title: {type: String},
    description: {type: String}
}, {
    timestamps: true,
    versionKey: false
}))
