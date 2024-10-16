const express = require("express");
const { singInUser, singUpUser } = require("../controller/usercontroller");
const router  = express.Router();


router.post("/register",singUpUser)
router.post("/login",singInUser)


module.exports = router;