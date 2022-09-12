const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersControllers");
const authorization = require("../middlewares/authorization");

// router.get("/me", authorization.verifyToken, userController.getDetailUser);
router.get("/me", userController.getDetailUser);

// router.get('/all', authorization.verifyToken, authorization.verifyAdmin, userController.getAllUser)
// router.get("/all", authorization.verifyToken, userController.getAllUser);
router.get("/all", userController.getAllUser);

router.put(
  "/:id/update",
  authorization.verifyToken,
  authorization.userUpdateDeleteAuthorize,
  userController.updateUser
);
// router.delete(
//   "/:id/delete",
//   authorization.verifyToken,
//   authorization.userUpdateDeleteAuthorize,
//   userController.deleteUser
// );

router.delete(
  "/:id/delete",

  userController.deleteUser
);
module.exports = router;
