const express = require('express')
const app = express()

const router = express.Router()

//Draw
router.get('/',(req,res)=>{
    //sample object
    const sampleData = [
        {
          "name": "Model 1",
          "price": 400,
          "preview": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTe-on1BcFlS70FHGQdZqbDm7YjwIf7IwElDDgrgjSLBkt_Okpn5A2P6naJR58psQUnjtuy-OFGpqYvsCbMVDlFy7b3qF6A3JiKlVzOUXuyRfGXYbOM8DaaSQ&usqp=CAE"
        },
        {
          "name": "Model 2",
          "price": 300,
          "preview": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpW4ObDqZEcHGWW61Msnin31sbzHAZJ7YYaPpU4nmwlrHdLnC9_fCaYb9iyGcewnDeifhpc4ownL5vcF63mmHirJ_4wwPZ6ThJC3d2fDLxmtNmkQhDH8-TfQ&usqp=CAE"
        },
        {
          "name": "Model 3",
          "price": 500,
          "preview": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR3wUwnl1tcF89JdLmuYmOcg66MLwLvCD-jmO_rCCKqx6VXWk2j9PxjjEnlWQ3GplHOW06zpIzaxQ453fL2r5IerKT1ozNNynegtfyzCRnYdlsPPCwDooJVewg&usqp=CAE"
        },
        {
          "name": "Model 4",
          "price": 700,
          "preview": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTcgiQYhuvDAKak9wmAjpgtov7NXhA_an4eXYhM9K3p4GS90vrWS0H6uKw0LanCWIqmaMsFoTJMOdrhjXcJONpHTsLH_uA7cRDG2bZrNTrC2xt0yMb5732UNc&usqp=CAE"
        },
        {
          "name": "Model 5",
          "price": 800,
          "preview": " https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9e3qLE3cgYmvJctYRpDfB4EMA8Fxar2Plx5mQu2Cv4MDaKOx1uhfqhkukeCPxUE2fauNMjIQsv2-iyLSnDgYR8NBI9jHGBrVT9wCqRWBiSQI4TXCLzHsEww&usqp=CAE"
        },
        {
          "name": "Model 6",
          "price": 700,
          "preview": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7ES1dT3qRpBsadXA_kfBzcdDR8wRpE2vxv85WRNGy0nTHFws40sfy9HJ2eOCWK2ezRhcw3IB5LgTalzD83-zJDZHGel56RkzE4HTX0g0TvomZ1FgJ-9iyrA&usqp=CAE"
        },
    
    ]
    res.send(sampleData)
})

//Order
router.post('/',(req,res)=>{
    validateOrder(req.body.order)?res.send('Order Placed')
    :res.status(401).send('Bad Request')
})

module.exports = router