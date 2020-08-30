const express = require('express')
const fs = require("fs")
const firebase = require('firebase/app')
require("firebase/database")    

const database = firebase.database()

const app = express()
const router = express.Router()

app.use(express.json())

//order
router.get('/',(req,res)=>{
    database.ref('/orders/').once('value').then(orders => {
      const data = orders.val()
      res.send(data)
    })
})

//drawerMain
router.get('/draw',(req,res)=>{
    fs.readFile("./data/draw.json", (err, draw) => {
        if(err) res.status(500).send('Server error!')
        const data = JSON.parse(draw)
        res.send(draw)
    })  
})

//drawEdit
router.put('/',(req,res)=>{
    const edit = req.body
    database.ref('draw/').set(edit)
    res.send('Drawer updated!')
})

module.exports = router