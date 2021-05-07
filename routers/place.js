const express = require('express');
const { postNewPlace, getAllPlace } = require('../controllers/place');
const auth = require('../helpers/authorization');
const router = express.Router();

router.post('/place',auth(["admin"]),postNewPlace);
router.get("/place",getAllPlace);

module.exports = router