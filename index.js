const express = require('express')
const app = express()
const routes = require(__dirname + '/scripts/routes.js')
const port = 8080

// api routes for data
app.use(routes)

// static files
app.use(express.static(__dirname + '/app/public/', {
  fallthrough:true
}))

// 404 page
app.use((req, res) => {
  res.sendFile(__dirname + '/app/public/404.html')
})

app.listen(port, () => {
  console.log('Visit http://localhost:' + port + ' to view this app (Ctrl + click the url); To stop: Ctrl + C in the terminal')
})
