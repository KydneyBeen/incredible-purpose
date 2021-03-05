const express = require('express')
const app = express()
const routes = require(__dirname + '/scripts/routes.js')
const port = 8080

app.use(routes)

app.use(express.static(__dirname + '/app/public/'))

app.listen(port, () => {
  console.log('http://localhost:' + port)
})
