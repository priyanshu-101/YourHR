// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const requireAuth = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (token) {
//     jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
//       if (err) {
//         console.log(err);
//         res.status(401).json({ error: 'Unauthorized' });
//       } else {
//         User.findById(decodedToken.id)
//           .then((user) => {
//             req.user = user;
//             next();
//           })
//           .catch((err) => {
//             console.log(err);
//             res.status(401).json({ error: 'Unauthorized' });
//           });
//       }
//     });
//   } else {
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// };

// module.exports = { requireAuth };
