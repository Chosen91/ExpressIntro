const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello everyone.')
})

app.get('/search', (req, res)=>{
    res.status(200).send('Markteisha Gill')
})

app.get('*', (req, res)=> {
    res.status(404).send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})