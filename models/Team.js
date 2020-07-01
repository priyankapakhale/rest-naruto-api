const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    name: {
        english: String,
        kanji: String,
        romaji: String
    },
    image: String,
    leaders: [String],
    team_jutsu: [String]
}, {
    timestamps: true
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team