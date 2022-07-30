import mongoose from 'mongoose';
const { Schema } = mongoose;

export const medicineSchema = new Schema({
  name:String,
  description:String,
  benefits: [String],
  
});