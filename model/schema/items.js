const singleItemSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
  },
};

const itemsSchema = {
  type: "array",
  items: singleItemSchema,
};

module.exports = {
  itemsSchema,
  singleItemSchema,
};
