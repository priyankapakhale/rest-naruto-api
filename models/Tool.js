const mongoose = require('mongoose')
const Schema = mongoose.Schema

const toolSchema = new Schema({
    name: String,
    image: String
}, {
    timestamps: true
})

const Tool = mongoose.model('Tool', toolSchema)

module.exports = Tool