const express = require('express')
const app = express()
const user = require('./api/user')
const admin = require('./api/admin')

app.use('/api/user',user)
app.use('/api/admin',admin)

const port = process.env.PORT || 3020
app.listen(port, ()=>console.log(`server listening at ${port}`))
