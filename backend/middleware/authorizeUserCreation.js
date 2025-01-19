const authorizeUserCreation = (req, res, next) => {
    const allowedPositions = ['president', 'vice-president', 'corporate secretary'];
  
    // Check if the logged-in user has a valid position
    if (!allowedPositions.includes(req.user.position)) {
      return res.status(403).json({ error: 'Only authorized positions can create users' });
    }
  
    next();  // Proceed to the create user controller if authorized
  };
  
  module.exports = authorizeUserCreation;
  