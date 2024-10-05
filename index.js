
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//'/' is used for calling //
// req is request and res is response//

app.get('/instagram', (req, res) => {
    res.send('sammancom')
  })

  app.get('/login', (req, res) => {
    res.send('plz login')
  })

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})