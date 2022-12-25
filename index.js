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
        const commentsCollection = client.db("starFurniture").collection("comments");

        app.get('/services', async (req, res) => {

            const filter = {};
            const result = await servicesCollection.find(filter).toArray();
            res.send(result);

        });

        app.get('/services/:id', async (req, res) => {

            const id = req.params.id;
            const filter = { _id: ObjectId(id) };
            const result = await servicesCollection.findOne(filter);
            res.send(result);

        });

        app.patch('/services/:id', async (req, res) => {
            const id = req.params.id;
            const title = req.body.title;
            const image = req.body.image;
            const price = req.body.price;
            const description = req.body.description;
            const query = { _id: ObjectId(id) };
            const updatedDoc = {
                $set: {
                    title,
                    image,
                    price,
                    description
                }
            }

            const result = await servicesCollection.updateOne(query, updatedDoc);
            res.send(result);

        });

        app.post('/services', async (req, res) => {
            const service = req.body;
            const result = await servicesCollection.insertOne(service);
            res.send(result);
        });

        app.delete('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await servicesCollection.deleteOne(query);
            res.send(result);
        });


        app.get('/comments' , async (req , res)=>{
            const filter = {};
            const result = await commentsCollection.find(filter).toArray();
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