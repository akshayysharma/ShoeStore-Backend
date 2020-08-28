const express = require('express')
const Joi = require('joi')
const fs = require('fs')

const app = express()

const router = express.Router()

//Draw
router.get('/',(req,res)=>{ 
  // Database 
})

//Order
router.post('/',(req,res)=>{
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email({minDomainSegments: 2}).required(),
      address: Joi.string().max(50).required(),
      order: Joi.string().min(3).required(),
      total: Joi.number().required(),
      phone: Joi.number().integer().min(1000000000).max(9999999999).required()
    })
    const { error, value } = schema.validate(req.body)
    if(error){res.status(400).send(error.details[0].message)
    return;
    }
    //Database
    res.send('Order Placed') 
})

module.exports = router