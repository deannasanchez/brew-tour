// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var brewinfoController  = require("../../controllers/brewinfo-controller");
var router = require("express").Router();

// Routes
// =============================================================

router.route("/")
  // method: GET route: /api/brewinfos
  .get(brewinfoController.read)
  // method: brewinfo route: /api/brewinfos
  .post(brewinfoController.create)
  // method: PUT route: /api/brewinfos
  .put(brewinfoController.update);

router.route("/:id")
  // method: GET route: /api/brewinfos/:id
  .get(brewinfoController.readById)
  // method: DELETE route: /api/brewinfos/:id
  .delete(brewinfoController.delete);

module.exports = router;
