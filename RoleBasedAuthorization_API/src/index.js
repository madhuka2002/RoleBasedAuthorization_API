
// const express = require('express');
// const dotenv = require('dotenv').config();
// const dbConnect = require('./config/dbConnect.js');
// const authRoutes = require('./routes/authRoutes.js');


// dbConnect();

// const app = express();

// // Middleware
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);

// // Start the server
// const PORT = process.env.PORT || 7002;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const dotenv = require('dotenv').config(); // Load environment variables
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 7000;

// Connect to the database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
