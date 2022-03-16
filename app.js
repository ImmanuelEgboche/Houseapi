const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(express.json())
app.use(cors())


app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.get("/", (req, res)=>{
    res.send('welcome')
})

app.get("/personal", (req, res) => {
    // sends back personal information 
})

app.get("/home", (req, res) => {
    // sends back personal information 
})
