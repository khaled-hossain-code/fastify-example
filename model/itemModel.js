const fs = require("fs");
const _ = require("lodash");
var path = require("path");
const itemFilePath = path.join(__dirname, "..", "data", "items.json");
const itemsData = fs.readFileSync(itemFilePath);

class Item {
  constructor() {
    this.data = JSON.parse(itemsData);
  }

  add(newItem) {
    this.data.push(newItem);
    this.save();
  }

  delete(item_id) {
    _.remove(this.data, { id: item_id });
    this.save();
  }

  save() {
    fs.writeFileSync(itemFilePath, JSON.stringify(this.data));
  }
}

module.exports = Item;
