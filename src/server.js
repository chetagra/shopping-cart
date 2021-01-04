const express = require('express')

const app = express()

const cart = require('./db/model')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')

let allproducts=[]

let products=[]

app.get('/',async(req,res)=>{

    try {


        const items = await cart.find({})

        items.forEach(element => {
            allproducts.push(element)
        })
        
       

        res.render(__dirname+'/public/index.hbs',{allproducts})

    } catch (e) {

        console.error(e);
    }

})





app.post('/cart',async (req,res)=>{
    try {
        let productName = req.body.product
        
        

        const item = await cart.find({
            productName : productName
        })

       item.forEach(element => {
           products.push(element)
       })
  

       res.render(__dirname+'/public/cart.hbs',{products})
        
    } catch (error) {
        console.error(error);
    }
  
})

const port = process.env.PORT || 3334

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
