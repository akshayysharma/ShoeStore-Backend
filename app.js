const express = require('express')
const handlebars = require('express-handlebars')
const helmet = require('helmet')
const cors = require('cors')
const user = require('./api/user')
const admin = require('./api/admin')

const app = express()

app.set('view engine', 'hbs')

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}))

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/api/user',user)
app.use('/api/admin',admin)


app.get('/admin',(req,res)=>{
    //Serve Template
    res.render('main', {layout : 'index'})
})

const port = process.env.PORT || 3020
app.listen(port, ()=>console.log(`server listening`))
