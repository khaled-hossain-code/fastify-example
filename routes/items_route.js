const { itemsSchema, singleItemSchema } = require("../model/schema/items");
const {
  getItems,
  getSingleItem,
  postSingleItem,
} = require("../controllers/items");

function itemsRoutes(fastify, Option, done) {
  fastify.get("/items", getItemsOpts);
  fastify.post("/items", postSingleItemOpts);
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

const postSingleItemOpts = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: {
          type: "string",
        },
      },
    },
    response: {
      201: singleItemSchema,
    },
  },
  handler: postSingleItem,
};

module.exports = itemsRoutes;
