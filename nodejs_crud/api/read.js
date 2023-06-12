async function readData(client, db, col) {
    await client.connect();
    const connectDB = client.db(db);
    const collection = connectDB.collection(col);

    try {
        const request = await collection.findOne({
            name: "Harish"
        });
        console.log(request);
    } catch (error) {
        console.log(error);
    }
};

module.exports = readData;