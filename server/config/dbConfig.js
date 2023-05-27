const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongo DB Connected successfully');
});
connection.on('error', (err) => {
  console.log('Mongo DB connection error:', err);
});
module.exports = mongoose;
