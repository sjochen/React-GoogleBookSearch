const router = require("express").Router();
const gbController = require("../../controller/gbcontroller");

router.route("/").get(gbController.findAll)
    .post(gbController.saveBook)

router.route("/:id")
.delete(gbController.remove)

module.exports = router