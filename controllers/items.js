const _ = require("lodash");
const { v4: uuidv4 } = require("uuid");
let items = require("../data/items");

const getAllItem = async (request, reply) => {
  return items;
};

const getItem = async (request, reply) => {
  const { item_id } = request.params;

  return _.find(items, { id: item_id });
};

const postItem = async (request, reply) => {
  const { name } = request.body;
  const newItem = {
    id: uuidv4(),
    name,
  };
  const newItems = [...items, newItem];
  return reply.code(201).send(newItem);
};

const deleteItem = async (request, reply) => {
  const { item_id } = request.params;
  const newItems = items.filter((item) => {
    item.id !== item_id;
  });

  reply.send({
    message: "item is deleted",
  });
};

module.exports = {
  getAllItem,
  getItem,
  postItem,
  deleteItem,
};
