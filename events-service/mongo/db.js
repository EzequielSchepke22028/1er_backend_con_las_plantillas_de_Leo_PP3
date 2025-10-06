const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = () => {
  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Atlas conectado'))
  .catch(err => {
    console.error('Error al conectar MongoDB:', err);
    process.exit(1);
  });
};

module.exports = connectDb;
