const express = require('express');
const app = express();
var cors = require('cors')
require('dotenv').config()
app.use(cors())
app.use(express.json)
const port = process.env.PORT || 5000;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.k2nsb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) =>{
    res.send('Hello from my sweet app')
});

app.listen(port, () =>{
    console.log('Listening to the port', port)
})
