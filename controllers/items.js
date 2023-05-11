const { getAllItemData, getItemData, postItemData } = require("../data/items");

const getAllItem = async (req, reply) => {
  return getAllItemData;
};

const getItem = async (req, reply) => {
  return getItemData;
};

const postItem = async (req, reply) => {
  return reply.code(201).send(postItemData);
};

const deleteItem = async (req, reply) => {
  const { item_id } = req.params;
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
