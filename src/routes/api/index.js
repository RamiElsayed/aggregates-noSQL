const { Router } = require("express");

const {getAllBooks, getBookAggregates} = require("../../controllers/api/books")

const router = Router();

router.use("/books", getAllBooks);
router.use("/books-aggregates", getBookAggregates);

module.exports = router;