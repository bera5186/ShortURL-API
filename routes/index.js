const express = require('express')
const router = express.Router()
const path = require('path')

const model = require('../models/Url')

router.get('/:code', async (req, res) => {
    
    try {
        const url = await model.findOne({ urlCode: req.params.code })

        if (url) {
            await model.updateOne({ urlCode: req.params.code }, { clicks: url.clicks + 1})
            return res.redirect(url.longUrl)
        } else {
            return res.status(400).json('URL not found');
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json('Internal Server Error');
    }
})

router.get('/', (req, res) => {
    res.render("index")
})

module.exports = router;