const router = require('express').Router()
const Tool = require('../../models/Tool')
const {capitalizeWord} = require("../../controllers/Capitalize")

// router.route('/').get((req, res) => {
//     Tool.find() 
//     .then(tools => res.json(tools))
//     .catch(err => res.status(400).json(err))
// })

router.get("/", async (req, res) => {
    try {
        var data = await Tool.find();
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
        var data = await Tool.findOne({"name": formattedStr})
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