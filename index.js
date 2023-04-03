// U7hpC3wBuxfRKi05
// carservice
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())

const uri = "mongodb+srv://carmama:HC7IaxHvY71qpZ5j@cluster0.dgoei.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
      const collection = client.db('carservices')
  const services = collection.collection('services')
  const order =collection.collection('order')
// get data
  app.get('/services',async(req,res)=>{
     const result = await services.find({}).toArray()

     res.send(result)
  })

  // get single data by params
  app.get('/service/:id',async(req,res)=>{
    const id = req.params.id
    const result =await services.findOne({_id:(id)})
  
    res.send(result)
  })

  // order data
 app.post('/ordernow',async(req,res)=>{
  const result = await order.insertOne(req.body)
  console.log(result)
 })
    }
    catch{

    }
    finally{

    }
}
run().catch(console.dir)





app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })