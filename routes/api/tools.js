const router = require('express').Router()
const Tool = require('../../models/Tool')

router.route('/').get((req, res) => {
    Tool.find() 
    .then(tools => res.json(tools))
    .catch(err => res.status(400).json(err))
})

module.exports = router