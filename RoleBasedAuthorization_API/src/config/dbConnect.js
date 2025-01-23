

const mongoose = require('mongoose');

const dbConnect = async() => {
    try {
        const connect = await mongoose.connect("mongodb+srv://madhukaaththanayaka:2002madhu@cluster0.qpnmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`Connected to MongoDB: ${connect.connection.host} ${connect.connection.name}`);
    } catch (error) {
        console.log(error);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = dbConnect;
