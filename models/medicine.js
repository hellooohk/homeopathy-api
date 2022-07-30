import mongoose from 'mongoose';
const { Schema } = mongoose;

const symptomSchema = new Schema({
  name:String,
});
module.exports = mongoose.model("symptoms", symptomSchema);