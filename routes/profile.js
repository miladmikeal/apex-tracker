const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/:platform/:gamertag', async (req, res) => {
  try {
    const headers = {
      'TRN-Api-Key': process.env.TRACKER_API_KEY
    }

    const { platform, gamertag } = req.params

    const response = await axios.get(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, { headers })

    res.send(response.data)
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: "Server Error"
    })
  }
})

module.exports = router