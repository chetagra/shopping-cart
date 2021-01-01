const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view Engine','hbs')

let product = {}

let arr=[]

app.get('/cart',(req,res)=>{
    res.render(__dirname+'/views/cart.hbs',{
        arr
    })
})

app.post('/cart',async(req,res)=>{


    try {

        let name = req.body.product
     
        const client= await MongoClient.connect('mongodb://localhost:27017')
        
        const db = client.db('shopdb')
        
        const collection= db.collection('items')
    
        const results= await collection.find({}).toArray()
        
       

        results.forEach(Element=>{
          if (Element.name==name) {
              product=Element
          }
        })

        arr.push(product)
       
        res.redirect('/cart')  

    } catch (e) {
        console.error(e)
    }

})


app.get('/',async(req,res)=>{

    try {

    const client= await MongoClient.connect('mongodb://localhost:27017')
    
    const db = client.db('shopdb')
    
    const collection= db.collection('items')

    const results= await collection.find({}).toArray()

    res.render(__dirname+'/views/home.hbs',{
        results
    })
        
    } catch (e) {
        console.error(e)
    }

    

})

module.exports=app


