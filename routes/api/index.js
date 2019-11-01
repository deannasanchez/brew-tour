var router = require("express").Router();

const brewinfoRoutes = require("./brewinfo-routes");
router.use("/posts", brewinfoRoutes);

module.exports = router;