const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const { query } = require('express');

const port = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bebjeyw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {
        // collections
        const servicesCollection = client.db("starFurniture").collection("services");

        app.get('/services', async(req , res)=>{

            const filter = {};
            const result = await servicesCollection.find(filter).toArray();
            res.send(result);

        });

        app.post('/services', async(req , res)=>{
            const service = req.body;
            const result = await servicesCollection.insertOne(service);
            res.send(result);
        });
        


    }
    finally {

    }

}

run().catch(err => console.error(err));


app.get('/', async (req, res) => {
    res.send('Star Furniture server is running')
});

app.listen(port, () => {
    console.log(`Star Furniture Server is running on ${[port]}`);
});