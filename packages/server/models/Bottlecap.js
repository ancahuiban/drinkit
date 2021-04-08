
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BottlecapSchema = new Schema({
  image: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("Bottlecap", BottlecapSchema);