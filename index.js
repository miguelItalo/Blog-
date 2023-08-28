const express = require('express')
const app = express()
const port = 9999
const router = require('./router')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', router)


app.get('/', (req, res) => {

})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})