const _ = require("lodash");
const { v4: uuidv4 } = require("uuid");
const ItemModel = require("../model/itemModel");
const itemObj = new ItemModel();

const getAllItem = async (request, reply) => {
  return itemObj.data;
};

const getItem = async (request, reply) => {
  const { item_id } = request.params;

  return _.find(itemObj.data, { id: item_id });
};

const postItem = async (request, reply) => {
  const { name } = request.body;
  const newItem = {
    id: uuidv4(),
    name,
  };

  itemObj.add(newItem);

  return reply.code(201).send(newItem);
};

const deleteItem = async (request, reply) => {
  const { item_id } = request.params;

  itemObj.delete(item_id);

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
