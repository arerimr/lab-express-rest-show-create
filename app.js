const express = require("express")

const app = express()

const logsController = require("./controllers/logsController.js")

app.use(express.json())

app.use("/logs", logsController)

app.get("/", (req, res)=>{
    res.send("welcome to the captain's log")
})

app.get("*", (req, res)=>{
    res.status(404).send("page/log does not exist")
})


module.exports = app