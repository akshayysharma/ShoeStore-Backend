const express = require('express')
const Joi = require('joi')
const firebase = require('firebase/app')
require("firebase/database")

//Unique Firebase Config Keys
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyCvesg_oEQSOka1gj_LiDS8m9J9lZWh6-k",
  authDomain: "simora.firebaseapp.com",
  databaseURL: "https://simora.firebaseio.com",
  projectId: "simora",
  storageBucket: "simora.appspot.com",
  messagingSenderId: "12230464810",
  appId: "1:12230464810:web:41b4ceb766e4b610d5fa53"
}

//Firebase Integration
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const app = express()
const router = express.Router()

//Draw
router.get('/draw',(req,res)=>{ 
  database.ref('draw/').once('value').then(draw =>{
    const data = draw.val()
    res.send(data)
  })
})

//Order
router.post('/order',(req,res)=>{

  //Validation
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email({minDomainSegments: 2}).required(),
      address: Joi.string().max(50).required(),
      order: Joi.string().min(3).required(),
      total: Joi.number().required(),
      phone: Joi.number().integer().min(1000000000).max(9999999999).required()
    })
    const { error, value } = schema.validate(req.body)
    if(error){
    res.status(400).send(error.details[0].message)
    return;
    }

    //Database
    const ordersRef = database.ref('orders/')
    const order = ordersRef.push()
    order.set({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      order: req.body.order,
      total: req.body.total,
      orderId: order.key,
      done: false
    })
    res.send('Order Placed')
    
})

//apply authentication:

//draw edit
router.put('/draw',(req,res)=>{
    const edit = req.body
    database.ref('draw/').set(edit)
    res.send('Drawer updated!')
})

//order status



module.exports = router