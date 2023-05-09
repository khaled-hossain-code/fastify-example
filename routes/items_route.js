const {
  itemsSchema,
  singleItemSchema,
  createItemSchema,
  deleteItemSchema,
} = require("../model/schema/items");
const {
  getAllItem,
  getItem,
  postItem,
  deleteItem,
} = require("../controllers/items");

function itemsRoutes(fastify, Option, done) {
  fastify.get("/items", getAllItemOpts);
  fastify.post("/items", postItemOpts);
  fastify.get("/items/:item_id", getItemOpts);
  fastify.delete("/items/:item_id", deleteItemOpts);

  done();
}

const getAllItemOpts = {
  schema: {
    response: {
      200: itemsSchema,
    },
  },
  handler: getAllItem,
};

const getItemOpts = {
  schema: {
    response: {
      200: singleItemSchema,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    body: createItemSchema,
    response: {
      201: singleItemSchema,
    },
  },
  handler: postItem,
};

const deleteItemOpts = {
  schema: {
    response: {
      200: deleteItemSchema,
    },
  },
  handler: deleteItem,
};

module.exports = itemsRoutes;
