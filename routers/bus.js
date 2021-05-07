const express = require("express");
const { postNewBus,getBus,getAllBusByCompany, getAllBus, deleteBus,putBus } = require("../controllers/bus");
const router = express.Router();
const auth = require("../helpers/authorization")

router.post("/bus",auth(["admin"]),postNewBus);
router.get("/allbus",getAllBus);
router.get("/busofcompany",getAllBusByCompany );
router.get("/bus",getBus);
router.delete("/bus",auth(["admin"]),deleteBus);
router.put("/bus",auth(["admin"]),putBus)

module.exports = router;