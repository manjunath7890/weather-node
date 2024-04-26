const mongoose = require('mongoose');

const db = "mongodb+srv://clientweather:etnA1Fu01Nd4blfV@cluster0.vkscikk.mongodb.net/?retryWrites=true&w=majority";

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