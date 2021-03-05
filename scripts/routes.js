const express = require('express')
const router = express.Router()
const apikey = require('../secret.js').owmkey
const query = require('./query.js')

router.get('/five/:city', (req, res) => {
  res.send('five/:city')
})

module.exports = router;
