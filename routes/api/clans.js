const router = require('express').Router()
const Clan = require('../../models/Clan')

router.route('/').get((req, res) => {
    Clan.find()
    .then(clans => res.json(clans))
    .catch(err => res.status(400).json(err))
})

module.exports = router