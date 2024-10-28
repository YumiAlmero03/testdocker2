const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.json({ message: 'Hello tesr me!' })
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})