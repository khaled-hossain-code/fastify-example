const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("./routes/items/itemsRoutes"), { prefix: "/items" });

const start = async () => {
  try {
    await fastify.listen({ host: "0.0.0.0", port: 4000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
