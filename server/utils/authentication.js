const jwt = require('jsonwebtoken');

// verify if the req.headers contain a valid token
const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.token;

  if (!authorizationHeader) {
    res.status(401).json({ msg: 'Not authorized to have access!' });
  } else {
    const token = authorizationHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json({ msg: 'Invalid token!' });
      }
      req.user = user;
      next();
    });
  }
};

// if req.headers contain a valid token, check if the id matches the id

const verifyAuthorized = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({
        msg: `You are not authorized to have access to this section!`,
      });
    }
  });
};

// if req.headers contain a valid token, chek if isAdmin is true;

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json({ msg: `You don't have admin credentials!` });
    }
  });
};

module.exports = { verifyAuthorized, verifyAdmin };
