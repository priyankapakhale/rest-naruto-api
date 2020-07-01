const router = require('express').Router()
const Team = require('../../models/Team')

router.route('/').get((req, res) => {
    Team.find()
    .then(teams => res.json(teams))
    .catch(err => res.status(400).json(err))
})

module.exports = router