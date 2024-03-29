import mongoose, { Schema } from 'mongoose';
import {users, products } from './data';
import {UserModel } from '../models/User';
import {ProductModel } from '../models/Product';

require('dotenv/config');
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => {
  console.log('error');
});

db.once('open', () => {
  console.log('Database connection is open!');
  UserModel.insertMany(users, (error) => {
    if(error){
      console.error(error)
    }
  });
  ProductModel.insertMany(products, (error) => {
    if(error) {
      console.error(error);
    }
  })
});