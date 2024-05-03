import Note from "../models/todo.js"

const getTodosController = async (req, reply) => {
  try {
    const notes = await Note.find({})
    reply.send(notes)
  } catch (err) {
    console.log(err)
  }
}

const getTodoController = async (req, reply) => {
  const { id } = req.params;
  const todo = await Note.findById(id)
  
  reply.send(todo)
}

const createTodoController = async (req, reply) => {
  const { text } = req.body;
  const todo = { text, isCompleted: false }

  const newTodo = await Note.create(todo)
  
  reply.code(201).send(newTodo)
}

export { 
  createTodoController,
  getTodosController,
  getTodoController
}