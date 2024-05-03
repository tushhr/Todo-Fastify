import Fastify from "fastify";
import mongoose from "mongoose";

const fastify = Fastify({ logger: true })

try {
  mongoose.connect('mongodb://localhost:27017/todos_db');
} catch(err) {
  console.log(err)
}

fastify.listen({ port: 5000 }, (err, address) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Listening on port", address)
  }
})