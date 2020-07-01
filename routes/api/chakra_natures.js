const router = require('express').Router()
const ChakraNature = require('../../models/ChakraNature')

router.route('/').get((req, res) => {
    ChakraNature.find()
    .then(chakra_natures => res.json(chakra_natures))
    .catch(err => res.status(400).json(err))
})

module.exports = router