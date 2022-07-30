import mongoose from 'mongoose';
const { Schema } = mongoose;

const medicineSchema = new Schema({
  name:String,
  description:String,
  benefits: [String],
  
});

module.exports = mongoose.model("medicine", medicineSchema);