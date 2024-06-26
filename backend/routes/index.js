import {
  createTodoController,
  getTodosController,
  getTodoController,
  deleteTodoController,
  updateTodoOptsController
} from "../controllers/todo.js"

const Todo = {
  id: { type: 'number' },
  text: { type: 'string' },
  isCompleted: { type: 'boolean' }
}

const todosOpts = {
  schema: {
    response: {
      200: {
        type: 'array',
        properties: Todo
      }
    }
  },
  handler: getTodosController
}

const todoOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: Todo
      }
    }
  },
  handler: getTodoController
}

const createTodoOpts = {
  schema: {
    body: {
      type: 'object',
      required: [ 'text' ],
      properties: {
        text: { type: 'string' }
      }
    },
    additionalProperties: false,
    response: {
      201: Todo
    }
  },
  handler: createTodoController
}

const deleteTodoOpts = {
  schema: {
    response: {
      200: Todo
    }
  },
  handler: deleteTodoController
}

const updateTodoOpts = {
  schema: {
    body: {
      type: 'object',
      required: [ 'text', 'isCompleted' ],
      properties: {
        text: { type: 'string' },
        isCompleted: { type: 'string' }
      }
    },
    additionalProperties: false,
    response: {
      200: Todo
    }
  },
  handler: updateTodoOptsController
}

const appRoutes = (fastify, options, done) => {
  fastify.get('/', todosOpts)

  fastify.post('/', createTodoOpts)

  fastify.get('/:id', todoOpts)

  fastify.delete('/:id', deleteTodoOpts)

  fastify.put('/:id', updateTodoOpts)

  done()
}

export default appRoutes;