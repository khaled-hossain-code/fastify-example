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

const createItemSchema = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
  },
};

const deleteItemSchema = {
  type: "object",
  properties: {
    message: {
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
  createItemSchema,
  deleteItemSchema,
};
