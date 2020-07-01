const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    permissionLevel: {type: Number, required: true}
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User