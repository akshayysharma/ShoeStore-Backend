const express = require('express')
const app = express()
const user = require('./api/user')
const admin = require('./api/admin')
const helmet = require('helmet')

app.use(express.json())
app.use(express.static('public'))
app.use('/api/user',user)
app.use('/api/admin',admin)
app.use(helmet)

const port = process.env.PORT || 3020
app.listen(port, ()=>console.log(`server listening at ${port}`))
