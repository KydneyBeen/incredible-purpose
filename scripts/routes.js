const express = require('express')
const router = express.Router()
const query = require('./query.js')
const cities = require('./cities.js')

// get 7 day forecast for given city, with fallback city being vancouver
router.post('/seven/:city', (req, res) => {
  let city = cities[req.params.city.toLowerCase()] || cities['vancouver']
  query(city, (data) => {
    res.send(data)
  })
})


// get list of supported cities
router.post('/cities', (req, res) => {
  let cities = Object.keys(cities)
  res.send(cities)
})

module.exports = router;
