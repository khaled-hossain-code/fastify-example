const { itemsSchema, singleItemSchema } = require("../model/schema/items");
const { getItems, getSingleItem } = require("../controllers/items");

function itemsRoutes(fastify, Option, done) {
  fastify.get("/items", getItemsOpts);
  fastify.get("/items/:item_id", getSingleItemOpts);

  done();
}

const getItemsOpts = {
  schema: {
    response: {
      200: itemsSchema,
    },
  },
  handler: getItems,
};

const getSingleItemOpts = {
  schema: {
    response: {
      200: singleItemSchema,
    },
  },
  handler: getSingleItem,
};

module.exports = itemsRoutes;
