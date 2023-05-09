const _ = require("lodash");
const { v4: uuidv4 } = require("uuid");
let items = require("../data/items");

const getItems = async (request, reply) => {
  return items;
};

const getSingleItem = async (request, reply) => {
  const { item_id } = request.params;

  return _.find(items, { id: item_id });
};

const postSingleItem = async (request, reply) => {
  const { name } = request.body;
  const newItem = {
    id: uuidv4(),
    name,
  };
  const newItems = [...items, newItem];
  return reply.code(201).send(newItem);
};

module.exports = {
  getItems,
  getSingleItem,
  postSingleItem,
};
