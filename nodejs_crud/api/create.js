async function createData(client, db, col) {
    await client.connect();
    const connectDB = client.db(db);
    const collection = connectDB.collection(col);

    try {
        const request = await collection.insertOne({
            name: "Messi",
            age: 33,
            address: "123 Argentina"
        });
        console.log(request);
    } catch (error) {
        console.log(error);
    }
};

module.exports = createData;