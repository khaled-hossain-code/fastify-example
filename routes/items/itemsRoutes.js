const {
  getAllItem,
  getItem,
  postItem,
  deleteItem,
} = require("../../controllers/items");

async function itemsRoutes(fastify, Option) {
  fastify.get("/", {}, getAllItem);
  fastify.post("/", {}, postItem);
  fastify.get("/:item_id", {}, getItem);
  fastify.delete("/:item_id", {}, deleteItem);
}

module.exports = itemsRoutes;
