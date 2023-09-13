import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/alltask?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("alltask");
    const result = await meetupsCollection.insertOne(data);

    client.close();
    res.status(200).json({ message: "Data saved successfully" });
  } else if (req.method === "DELETE") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/alltask?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("alltask");
    const objdataID = new ObjectId(data);
    const result = await meetupsCollection.deleteOne({ _id: objdataID });

    client.close();
    res.status(200).json({ message: "Data deleted successfully" });
  } else if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/alltask?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("alltask");
    const result = await meetupsCollection.find().toArray();

    res.status(200).json(result);
    client.close();
  } else if (req.method === "PUT") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://rajat-user:rajatsundriyal@cluster0.zfkoszx.mongodb.net/alltask?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("alltask");
    const objdataID = new ObjectId(data);
    const update = { $set: { taskComplete: true } };
    const result = await meetupsCollection.updateOne(
      { _id: objdataID },
      update
    );
    client.close();
  } else {
    res.status(405).json({ error: "Request Failed" });
  }
}

export default handler;
