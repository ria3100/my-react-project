var express = require('express')
var app = express()

app.use(express.static('dist'))

app.listen(3000, function() {
  console.log('Your application is running here: http://localhost:3000')
})
