const router = require('express').Router()
const Character = require('../../models/Character')

router.route('/').get((req, res) => {
    Character.find()
    .then(characters => res.json(characters))
    .catch(err => res.status(400).json(err))
})

module.exports = router