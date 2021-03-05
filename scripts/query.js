const apikey = require('../secret.js').owmkey
const apilocation = 'https://api.openweathermap.org/data/2.5/forecast?'
const https = require('https')


module.exports = (parameters, callback) => {
  let querystring = apilocation
  querystring += 'q=' + parameters.q
  querystring += '&appid=' + apikey
  
  https.get(querystring, (data) => {
    callback(data)
  })
}
