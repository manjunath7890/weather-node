const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      userName: 'string',
      email: 'string',
      password: 'string',
  });

  const UserForm = mongoose.model('UserForm', userSchema);
  module.exports = UserForm;

