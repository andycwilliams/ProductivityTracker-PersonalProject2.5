const { MongoClient } = require('mongodb');
const axios = require('axios');
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('birds');
const collection = db.collection('documents');

const getBirds = (collection) => collection.find({}).toArray();

const addBird = async (collection) => {
  const result = await collection.insertMany([
    { name: 1 },
    { name: 2 },
    { name: 3 },
  ]);
  console.log(result);
  return collection;
};

app.get('/', async function (req, res) {
  const birds = await getBirds(collection);
  res.json(birds);
});

client.connect().then(() => app.listen(3000));