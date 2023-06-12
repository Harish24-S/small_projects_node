async function updateData(client, db, col) {
    await client.connect();
    const connectDB = client.db(db);
    const collection = connectDB.collection(col);

    try {
        const request = await collection.updateOne({
            name: "Harish"
        },{
            $set: {
                age: 50
            }
        });
        console.log(request);
    } catch (error) {
        console.log(error);
    }
};

module.exports = updateData;