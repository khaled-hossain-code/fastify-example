const _ = require("lodash");
const items = require("../data/items");

const getItems = async (request, reply) => {
  return items;
};

const getSingleItem = async (request, reply) => {
  const { item_id } = request.params;

  return _.find(items, { id: item_id });
};

module.exports = {
  getItems,
  getSingleItem,
};
