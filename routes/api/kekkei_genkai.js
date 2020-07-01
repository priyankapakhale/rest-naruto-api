const router = require('express').Router()
const KekkeiGenkai = require('../../models/KekkeiGenkai')

router.route('/').get((req, res) => {
    KekkeiGenkai.find()
    .then(kekkei_genkai => res.json(kekkei_genkai))
    .catch(err => res.status(400).json(err))
})

router.route('/add').post((req, res) => {
    const kekkei_genkai = new KekkeiGenkai(req.body)
    kekkei_genkai.save()
    .then(() => res.json('Kekkei Genkai added'))
    .catch(err => res.status(400).json(err))
})

module.exports = router