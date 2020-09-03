const express = require('express')
const drawData = require('../data/draw.json')
const firebase = require('firebase/app')
require("firebase/database")    

const app = express()

app.use(express.json())

const router = express.Router()

const database = firebase.database()


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

module.exports = router