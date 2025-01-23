
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userSchema'); // Correct import

// // Register Functionality
// const register = async (req, res) => {
//     try {
//         const { username, password, role } = req.body; // Fixed `requestAnimationFrame.body` to `req.body`

//         // Check if user already exists
//         const existingUser = await User.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ message: `User with username "${username}" already exists` });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create a new user
//         const newUser = new User({ username, password: hashedPassword, role });
//         await newUser.save();

//         res.status(201).json({ message: `User registered with username ${username}` });
//     } catch (err) {
//         res.status(500).json({ message: "Error: " + err.message });
//     }
// };

// // Login Functionality
// const login = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Find the user by username
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(404).json({ message: `User not found: ${username}` });
//         }

//         // Compare the password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid password" });
//         }

//         // Generate a JWT token
//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.status(200).json({ token, message: "Login successful" });
//     } catch (err) {
//         res.status(500).json({ message: "Error: " + err.message });
//     }
// };

// module.exports = {
//     register,
//     login,
// };

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: `User with username "${username}" already exists` });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the user
        const newUser = new User({ username, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: `User registered with username ${username}` });
    } catch (err) {
        res.status(500).json({ message: "Error: " + err.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: `User not found: ${username}` });
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET, // Use the environment variable
            { expiresIn: "1h" }
        );

        res.status(200).json({ token, message: "Login successful" });
    } catch (err) {
        res.status(500).json({ message: "Error: " + err.message });
    }
};

module.exports = {
    register,
    login,
};
