const router = require("express").Router();
const {
 testHttp,
 addCardHttp
} = require("../controllers/card.http");
const { validData } = require("../middlewares/validation");

router.get("/", testHttp);
router.post("/", validData, addCardHttp);


module.exports.cardRoutes = router;
