const path = require('node:path');
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: path.join(__dirname, '../config/.env'),
  });
}
require('dotenv').config();

const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://nayan:UozX3KGkbLI5OHPP@cluster0.vtmuk.mongodb.net/Ecom-Follow-Along'
    )
    .then((data) => {
      console.log(
        `Database is connected Successfully: ${data.connection.host}`
      );
    })
    .catch((er) => console.log('Database connection Failed...', er.message));
};

module.exports = connectDatabase;
