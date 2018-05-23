const functions = require('firebase-functions')

exports.bigben = functions.https.onRequest((req, res) => {
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      aaa
    </body>
  </html>`)
})
