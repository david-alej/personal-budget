const express = require("express")
const app = express()

const morgan = require("morgan")
const bodyParser = require("body-parser")

app.use(morgan("dev"))

app.use(bodyParser.json())

PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log("Listening on port", PORT)
})
