const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name: {
        english: String,
        kanji: String,
        romaji: String
    },
    image: String,
    other_names: [String],
    voice_actors: {
        japaneses: [String],
        english: [String]
    },
    personal: {
        birthdate: String,
        sex: String,
        age: {},
        status: String,
        height: {},
        weight: {},
        blood_type: String,
        kekkei_genkai: [String],
        classifications: [String],
        occupations: [String],
        affiliations: [String],
        teams: [String],
        partners: [String],
        clan: [String],
    },
    rank: {
        ninja_rank: String,
        ninja_registration: String,
        academy_graduation_age: Number,
        chunin_promotion_age: Number
    },
    family: {},
    nature_types: [String],
    jutsu: [String],
    tools: [String]
}, {
    timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character