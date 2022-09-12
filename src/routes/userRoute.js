const express = require("express");
const userControllers = require("../controllers/userControllers");
const useValidator = require("../middlewares/validators");
const router = express.Router();

router.post(
  "/register",
  useValidator.registerValidator,
  userControllers.register
);
router.post("/login", userControllers.login);

module.exports = router;
