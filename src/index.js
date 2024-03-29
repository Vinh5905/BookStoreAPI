const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})