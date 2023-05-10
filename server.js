const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("./routes/items/itemsRoutes"));

const start = async () => {
  try {
    await fastify.listen({ port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
