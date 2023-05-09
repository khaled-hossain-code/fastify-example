const { getAllItemData, getItemData, postItemData } = require("../data/items");

const getAllItem = async (request, reply) => {
  return getAllItemData;
};

const getItem = async (request, reply) => {
  return getItemData;
};

const postItem = async (request, reply) => {
  return reply.code(201).send(postItemData);
};

const deleteItem = async (request, reply) => {
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
