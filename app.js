const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')
const user = require('./api/user')
const admin = require('./api/admin')


app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api/user',user)
app.use('/api/admin',admin)

const port = process.env.PORT || 3020
app.listen(port, ()=>console.log(`server listening at ${port}`))
