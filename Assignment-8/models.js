const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
// Create User model
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z\s]{2,50}$/.test(v);
      },
      message: 'Invalid full name! Please enter a valid full name (2-50 characters, alphabets and spaces only).'
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
      },
      message: 'Invalid email address'
    }
  },
  password: {
    type: String,
    required: true,
  },
});
  // Password hashing and validation
userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  console.log(user.password);
  const isValidPassword = passwordRegex.test(user.password);
  console.log(isValidPassword);
  if (!isValidPassword) {
    const err = new Error('Invalid password format');
    err.statusCode = 400;
    return next(err);
  }
  bcrypt.hash(user.password, 10, function(err, hashedPassword) {
    if (err) {
      return next(err);
    }
    user.password = hashedPassword;
    next();
  });
});
//Creating the collection Users
const Users = mongoose.model('Users', userSchema)

module.exports = Users;