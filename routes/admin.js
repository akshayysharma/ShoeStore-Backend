const express = require('express')
const drawData = require('../data/draw.json')
const firebase = require('firebase/app')
require("firebase/database")    

const app = express()

app.use(express.json())

const router = express.Router()

const database = firebase.database()


//serve template
router.get('/',(req,res)=>{
    //Serve Template
    database.ref('/').once('value').then(draw =>{
        const main = draw.val().orders
        res.render('main',{orderList : main, order : true})
    })
})

//draw
router.get('/draw',(req,res)=>{
    res.render('main',{drawList : drawData , draw :true })
})

module.exports = router