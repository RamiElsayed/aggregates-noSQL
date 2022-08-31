const mongoose = require("mongoose");
const { Book } = require("../models");

const books = [
  { title: "Hello, World", price: 5, inStock: true },
  { title: "Hello World 2.0", price: 10, inStock: true },
  { title: "Hello, World 3,0", price: 7, inStock: true },
  { title: "Hello World 4.0", price: 20, inStock: true },
  { title: "Hello, World 5.0", price: 2, inStock: false },
  { title: "Hello World Infinity", price: 25, inStock: false },
  { title: "Hello World Infinity and Beyond", price: 4, inStock: true },
];

const init = async () => {
  try {
    // from the new instance of the client use the connect method to establish a connection
    mongoose.connect("mongodb://127.0.0.1:27017/libraryDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO]: Database connection successful");

    await Book.deleteMany({});
    await Book.insertMany(books);

    console.log("[INFO]: Data seeded successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

init();
