const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()
require('./modules/db')

const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
    res.send("Òla Mundo")
})

app.use(cors())

app.listen(port, () => {
    console.info("url - http:localhost:" + port)
})