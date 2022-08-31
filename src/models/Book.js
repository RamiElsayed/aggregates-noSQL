const { Schema, model } = require("mongoose");

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: { type: String, required: false },
  stockCount: { type: Number, required: false },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const schema = new Schema(BookSchema);

const Book = model("Book", schema);

Book.create();

module.exports = Book;
