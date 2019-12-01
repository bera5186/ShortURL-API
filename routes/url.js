const express = require('express')
const router = express.Router()
const config = require('config')
const validUrl = require('valid-url')
const shortid = require('shortid')

const model = require('../models/Url')

// @route POST /api/url/shorten
router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body
    const baseUrl = config.get('baseUrl')
    console.log(baseUrl)

    if(!validUrl.isUri(longUrl)) {
        return res.status(401).json('invalid base url 🤞')
    }

    // Create url codee
    const urlCode = shortid.generate()

    //
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await model.findOne({ 'longUrl' : longUrl })

            if (url) {
                res.json(url)
            } else {
                const shortUrl = baseUrl + '/' + urlCode
                url = new model({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })

                await url.save()
                res.json(url)
            }
        } catch (error) {
            console.error(error)
            res.status(500).json('Server Error 😥')
        }
    } else {
        res.status(401).json('Invalid Base Url 🤞')
    }
})


module.exports = router;