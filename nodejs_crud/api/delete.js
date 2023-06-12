async function deleteData(client, db, col) {
    await client.connect();
    const connectDB = client.db(db);
    const collection = connectDB.collection(col);

    try {
        const request = await collection.deleteOne({
            name: "John Doe"
        });
        console.log(request);
    } catch (error) {
        console.log(error);
    }
};

module.exports = deleteData;