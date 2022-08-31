const { Book } = require("../../models");

const getAll = async (req, res) => {
  try {
    const data = await Book.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all Books | ${error.message}`);
    return res.status(500).json({ error: "Failed to get all Books" });
  }
};

const getAllAggregate = async (req, res) => {
  try {
    const data = await Book.aggregate([
      {
        $match: { inStock: true },
      },
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
    console.log(`[ERROR]: Failed to get Books aggregates | ${error.message}`);
    return res.status(500).json({ error: "Failed to get Books aggregates" });
  }
};

module.exports = { getAll, getAllAggregate };
