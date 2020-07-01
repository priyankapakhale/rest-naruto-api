const router = require('express').Router()
const Village = require('../../models/Village')

router.route('/').get((req, res) => {
    Village.find()
    .then(villages => res.json(villages))
    .catch(err => res.status(400).json(err))
})

module.exports = router