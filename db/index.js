import mongoose, { Schema } from 'mongoose';
// require('dotenv/config');
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => {
  console.log('error');
});

db.once('open', () => {
  console.log('Database connection is open db!');
});

export default db;