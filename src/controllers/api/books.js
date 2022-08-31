const { Book } = require("../../models");

const getAllBooks = async (req, res) => {
  try {
    const data = await Book.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all books | ${error.message}`);
    return res.status(500).json({ error: "Failed to get all books" });
  }
};

const getBookAggregates = async (req, res) => {
  try {
    const data = await Book.aggregate([
      {
        $group: {
          _id: null,
          sum_price: { $sum: '$price' },
          avg_price: { $avg: '$price' },
          max_price: { $max: '$price' },
          min_price: { $min: '$price' },
        },
      },
    ]);
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get books aggregates | ${error.message}`);
    return res.status(500).json({ error: "Failed to get books aggregates" });
  }
};

module.exports = { getAllBooks, getBookAggregates };
