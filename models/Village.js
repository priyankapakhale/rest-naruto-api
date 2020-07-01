const mongoose = require('mongoose')
const Schema = mongoose.Schema

const villageSchema = new Schema({
    name: String,
    other_names: [{
        kanji: String,
        romaji: String,
        literal_english: String,
        english_tv: String
    }],
    image: String,
    country: String,
    leaders: [String],
    symbol: String
}, {
    timestamps: true
})

const Village = mongoose.model('Village', villageSchema)

module.exports = Village