const router = require('express').Router()
const ChakraNature = require('../../models/ChakraNature')
const {capitalizeWord} = require("../../controllers/Capitalize");

// router.route('/').get((req, res) => {
//     // ChakraNature.find()
//     // .then(chakra_natures => res.json(chakra_natures))
//     // .catch(err => res.status(400).json(err))
//     try {
//         var data
//     } catch (error) {
        
//     }
// })

router.get("/", async (req, res) => {
    try {
        var data = await ChakraNature.find();
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
        var data = await ChakraNature.findOne({name: formattedStr})
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