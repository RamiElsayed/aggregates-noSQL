const { Router } = require("express");

const { getAll, getAllAggregate } = require("../../controllers/api/books");

const router = Router();

router.get("/", getAll);
router.get("/aggregates", getAllAggregate);

module.exports = router;