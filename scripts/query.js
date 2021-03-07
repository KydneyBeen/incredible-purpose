const apikey = require('../secret.js').owmkey
const apilocation = 'https://api.openweathermap.org/data/2.5/onecall?'
const https = require('https')


module.exports = (parameters, callback) => {
  let querystring = apilocation
  querystring += 'lat=' + parameters.lat
  querystring += '&lon=' + parameters.long
  querystring += '&units=metric'
  querystring += '&appid=' + apikey
  querystring += '&exclude=current,minutely,hourly,alerts'
  
  https.get(querystring, (data) => {
    let results = ''
    data.on('data', (chunk) => {
      results += chunk
    })
    data.on('end', () => {
      callback(results)
    })
    data.on('error', (error) => {
      callback(error)
    })
  })
}
