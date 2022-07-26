const router = require("express").Router();
const { echoController } = require("../controllers");
const { validText } = require("../validators");

router.get("/iecho",validText,echoController);

module.exports=router;