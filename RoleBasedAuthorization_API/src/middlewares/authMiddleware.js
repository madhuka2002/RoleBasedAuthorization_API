// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//     let token;
//     let authHeader = req.headers.Authorization || req.headers.authorization;
//     if(authHeader && authHeader.startWith('Bearer ')){
//         token = authHeader.split(' ')[1];

//         if(!token) {
//             return res.status(401).json({message: 'no token authorization dinied'});
//         }

//         try{
//             const decode = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = decode;
//             console.log('The decoded user is', req.user);
//             next();
//         }
//         catch(err){
//             return res.status(401).json({message: 'invalid token'});
//         }
//     }

// };

// module.exports = verifyToken;


const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization; // Get the authorization header

        // Check if the authorization header exists
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Authorization token missing or invalid" });
        }

        // Extract the token from the authorization header
        const token = authHeader.split(" ")[1]; // Extract the part after "Bearer"

        // Verify the token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: "Invalid token" });
            }

            // Attach the user info to the request object
            req.user = decoded;
            next();
        });
    } catch (err) {
        res.status(500).json({ message: "Error: " + err.message });
    }
};

module.exports = verifyToken;
