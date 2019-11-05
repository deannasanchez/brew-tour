var router = require("express").Router();

const brewinfoRoutes = require("./brewinfo-routes");
router.use("/posts", brewinfoRoutes);
const postRoutes = require("./post-routes");
router.use("/saved", postRoutes);

module.exports = router;