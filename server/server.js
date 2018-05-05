const express = require('express')
const path = require('path')

const app = express()

// указываем папку для отображения статичного файла
app.use('/', express.static(path.join(__dirname, './public'))) 

// отображаем статичную страницу
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(8080, () => {
  console.log('server start on port 8080')
})