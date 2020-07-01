const mongoose = require('mongoose')
const Schema = mongoose.Schema

const kekkeiGenkaiSchema = new Schema({
    name: {
        english: String,
        kanji: String,
        romaji: String,
        literal_english: String,
        english_tv: String, 
        other: String,
        viz_manga: String
    },
    image: String,
    clans: [{
        image: String,
        name: String
    }],
    classifications: [String],
    known_wielders: [String],
    jutsu: [String]
}, {
    timestamps: true
})

const KekkeiGenkai = mongoose.model('KekkeiGenkai', kekkeiGenkaiSchema)

module.exports = KekkeiGenkai