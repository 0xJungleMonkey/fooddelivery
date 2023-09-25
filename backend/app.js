const config = require("./config.json");
const { MongoClient } = require("mongodb");
//connect with mongodb cluster
const client = new MongoClient(config.mongodbconnection);
async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("freshgo");
    const coll = db.collection("category");
    console.log("connected");
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    await cursor.forEach(console.log);
    // iterate code goes here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
