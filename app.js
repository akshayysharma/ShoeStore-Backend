const express = require('express')
const handlebars = require('express-handlebars')
const helmet = require('helmet')
const cors = require('cors')
const api = require('./api/main')
const admin = require('./routes/admin')

const app = express()

//handleBars setup
app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index', 
}))

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/api',api)
app.use('/admin',admin)

const port = process.env.PORT || 3020
app.listen(port, () => console.log(`server listening`))
