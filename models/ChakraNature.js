const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chakraNatureSchema = new Schema({
    name: String,
    image: String
}, {
    timestamps: true
})

const ChakraNature = mongoose.model('ChakraNature', chakraNatureSchema)

module.exports = ChakraNature