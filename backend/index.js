import Fastify from "fastify";

const fastify = Fastify({ logger: true })

fastify.listen({ port: 5000 }, (err, address) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Listening on port", address)
  }
})