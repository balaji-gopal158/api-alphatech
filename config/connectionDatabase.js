// config/database.js
const mongoose = require('mongoose');

const connectDataBase = () => {
  const uri = process.env.database_Uri_cloud;

  if (!uri) {
    console.error('❌ MongoDB URI is missing in environment variables (database_Uri_cloud)');
    process.exit(1); // Exit the process if URI is not set
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(`✅ DB connected: ${con.connection.host}`);
    console.log('✅ DB connected: ' + con.connection.name);
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if connection fails
  });
};

module.exports = connectDataBase;
