const router = require('express').Router()
const Team = require('../../models/Team')
const {capitalizeWord} = require("../../controllers/Capitalize")

// router.route('/').get((req, res) => {
//     Team.find()
//     .then(teams => res.json(teams))
//     .catch(err => res.status(400).json(err))
// })

router.get("/", async (req, res) => {
    try {
        var data = await Team.find();
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
        var data = await Team.findOne({"name.english": formattedStr})
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