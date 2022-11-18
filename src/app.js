
//? Dependencies
const express = require('express')

//? Initial Config
const port = 9000
const app = express()

//? JSON request available
app.use(express.json())

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})  