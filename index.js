const express = require('express')
const router = require('./src/routes/operacoes')
const app = express()
app.use(express.json())

app.use(router)

app.listen(3000, () => {
  console.log('o servidor ligou')
})

