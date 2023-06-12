const connectURI = 'mongodb+srv://harish:Harish@cluster0.phzauqd.mongodb.net/?retryWrites=true&w=majority';

const { MongoClient, ServerApiVersion } = require('mongodb');
const createData = require('./api/create');
const readData = require('./api/read');
const updateData = require('./api/update');
const deleteData = require('./api/delete');

const client = new MongoClient(connectURI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = "usersdb";
const collection = "userdata";

createData(client, db, collection);
// readData(client, db, collection);
// updateData(client, db, collection);
// deleteData(client, db, collection);