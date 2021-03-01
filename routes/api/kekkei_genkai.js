const router = require('express').Router()
const KekkeiGenkai = require('../../models/KekkeiGenkai')
const {capitalizeWord} = require("../../controllers/Capitalize");

// router.route('/').get((req, res) => {
//     KekkeiGenkai.find()
//     .then(kekkei_genkai => res.json(kekkei_genkai))
//     .catch(err => res.status(400).json(err))
// })

// router.route('/add').post((req, res) => {
//     const kekkei_genkai = new KekkeiGenkai(req.body)
//     kekkei_genkai.save()
//     .then(() => res.json('Kekkei Genkai added'))
//     .catch(err => res.status(400).json(err))
// })

router.get("/", async (req, res) => {
    try {
        var data = await KekkeiGenkai.find();
        res.status(200).json({
            status: true,
            data: data,
            msg: "success"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            data: error,
            msg: "Internal Server Error"
        })
    }
})

router.get("/search/:name", async (req, res) => {
    try {
        const {name} = req.params;
        var formattedStr = capitalizeWord(name)
        var data = await KekkeiGenkai.findOne({"name.english": formattedStr})
        res.status(200).json({
            status: true,
            data: data,
            msg: "success"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            data: error,
            msg: "Internal Server Error"
        })
    }
})

module.exports = router