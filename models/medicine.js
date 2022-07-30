import mongoose from 'mongoose';
const { Schema } = mongoose;

const medicineSchema = new Schema({
  name:String,
  description:String,
  
});