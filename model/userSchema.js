const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      userName: 'string',
      email: 'string',
      password: 'string',
  });

  const User = mongoose.model('User', userSchema);
  module.exports = User;

