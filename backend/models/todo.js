import mongoose from "mongoose";

const { Schema } = mongoose;

const todoSchema = new Schema({
  text: { type: String, required: true },
  isCompleted: { type: Boolean, required: true }
});
const Todo = mongoose.model('todo', todoSchema);

export default Todo;