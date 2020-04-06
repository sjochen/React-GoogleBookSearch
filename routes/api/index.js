  
const router = require('express').Router();
const gbookRoutes = require("./gbooks");

router.use("/books", gbookRoutes)

module.exports = router;