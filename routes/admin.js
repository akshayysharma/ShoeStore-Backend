const express = require('express')
const drawData = require('../data/draw.json')
const firebase = require('firebase/app')
require("firebase/database")    

const app = express()

app.use(express.json())

const router = express.Router()

const database = firebase.database()

const keys = {username:'admin@login', password: '123456'}

//routes
router.get('/',(req,res)=>{
    database.ref('/orders').once('value').then(data =>{
        const list = data.val()
        res.send(list)
    })
})

    //draw
router.get('/draw',(req,res)=>{
    res.send(drawData)
})

//authentication
router.get('/auth/:id/:pass',(req,res)=>{
    if(req.params.id === keys.username && req.params.pass === keys.password)
    {res.status(200).send('valid user')
    return}
    else{
        res.status(401).send('Invalid!')
        return
    }
})


module.exports = router