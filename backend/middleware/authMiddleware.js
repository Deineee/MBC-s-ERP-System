const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
      return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
      const { _id } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ _id }).select('_id position');

      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      req.user = user;
      next();
  } catch (error) {
      console.log(error);
      res.status(401).json({ error: 'Request is not authorized' });
  }
}

  module.exports = authenticate