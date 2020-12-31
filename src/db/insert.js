const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017',(err,client)=> {
    if (err) throw err

    const db = client.db('shopdb')
    
    const collection= db.collection('items')

   const results = collection.insertMany([
        {
            name: "Iphone 11",
            type: "mobile Phone",
            seller: "Apple",
            Price : 50000
        },
        {
            name: "Oneplus 7",
            type: "mobile Phone",
            seller: "Oneplus",
            Price : 40000
        },
        {
            name: "Samsung S10",
            type: "mobile Phone",
            seller: "Samsung",
            Price : 70000
        }
    ],(err,results)=>{
         if (err) throw err

         console.log(results)
    })

})