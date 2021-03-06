const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cartdb',{useNewUrlParser: true})

const cartSchema = new mongoose.Schema({
    productName : String,
    price : Number,
    manufacturer: String
})

const cart = mongoose.model('cart',cartSchema)

const insert = async ()=>{
    try {

        const items = await cart.create({
            productName : "Realme-X",
            price : 20000,
            manufacturer : "Realme"
        },
        {
        productName : "Samsung-S10",
        price : 90000,
        manufacturer : "Samsung"
        },
        {
            productName : "Iphone-11",
            price : 60000,
            manufacturer : "Apple"
        },
        {
            productName : "Oneplus-7",
            price : 30000,
            manufacturer : "Oneplus"
        })
    
        console.log(items);
        
    } catch (e) {
        console.error(e);
    }
   
    
}


const read=async ()=>{

    try {

        const items= await cart.find({})
     
        items.forEach(element => {
            console.log(element)
        })
        
    } catch (e) {
        console.error(e);
    }

 
}



module.exports=cart