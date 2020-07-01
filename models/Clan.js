const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clanSchema = new Schema({
    name: {
        english: String,
        kanji: String,
        romaji: String
    },
    image: String,
    affiliation: [String],
    kekkei_genkai: [String],
    known_members: [String],
    jutsu: [String]
},{
    timestamps: true
})

const Clan = mongoose.model('Clan', clanSchema)

module.exports = Clan