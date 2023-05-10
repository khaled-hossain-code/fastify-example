const {
  getAllItem,
  getItem,
  postItem,
  deleteItem,
} = require("../../controllers/items");

function itemsRoutes(fastify, Option, done) {
  fastify.get("/items", {}, getAllItem);
  fastify.post("/items", {}, postItem);
  fastify.get("/items/:item_id", {}, getItem);
  fastify.delete("/items/:item_id", {}, deleteItem);

  done();
}

module.exports = itemsRoutes;
