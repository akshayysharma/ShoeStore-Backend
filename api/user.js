const express = require('express')
const Joi = require('joi')
const fs = require('fs')
const firebase = require('firebase/app')
require("firebase/database")

//Unique Firebase Config Keys
const firebaseConfig = {
  // ...
}

//Firebase Integration
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

const app = express()
const router = express.Router()

//Draw
router.get('/',(req,res)=>{ 
  database.ref('/draw/').once('value').then(draw =>{
    const data = draw.val()
    res.send(data)
  })
})

//Order
router.post('/',(req,res)=>{

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
      orderId: order.key
    })
    res.send('Order Placed')
    
})

module.exports = router