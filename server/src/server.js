const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const { connectDb }  = require("./database/connectToDB")
const { routerMW} = require('./routes/productRoutes')
const {logger} = require('./logAndTrace/logger')

const PORT_NUMBER = 3001
const app = express()
const jsonParseMW = json()
const corsMW = cors()

app.use(corsMW)
app.use(jsonParseMW)
app.use(routerMW)

app.listen(PORT_NUMBER, ()=>{
    connectDb()
    logger.info(`server is running on- http://localhost:${PORT_NUMBER}`)
})