// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'your-secret-key', (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.userId = decodedToken.userId;
    next();
  });
};

module.exports = { requireAuth };
