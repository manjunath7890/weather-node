const mongoose = require('mongoose');

const db = "mongoDB_URL";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
