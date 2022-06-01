const express = require("express")
const app = express()

const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
    res.send("Òla Mundo")
})

app.listen(port, () => {
    console.info("url - http:localhost:" + port)
})