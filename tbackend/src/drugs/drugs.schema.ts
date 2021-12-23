import * as mongoose from 'mongoose';

export const DrugSchema = new mongoose.Schema({
  id: String,
  name: String,
  diseases: [String],
  description: String,
  released: String,
});
