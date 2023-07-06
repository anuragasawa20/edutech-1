const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGODB_URL;
mongoose.set('strictQuery', false);

try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log('Database Connected Successfully');
} catch (err) {
  console.log('Error:', err);
}
