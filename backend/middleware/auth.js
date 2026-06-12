const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  if (token.startsWith('admin-token-')) {
    next();
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authMiddleware };
