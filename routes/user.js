const express = require("express");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
  getProfile,
  updateProfilePicture,
  getAllUsers,
  getUser,
  updateCover,
  addFriend
} = require("../controllers/user");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
router.get("/getProfile/:username", authUser, getProfile);
router.get("/getUser/:userId", getUser);
router.put("/updateProfilePicture", authUser, updateProfilePicture);
router.get("/users", getAllUsers);
router.put("/updateCover", authUser, updateCover);
router.put("/addFriend", authUser, addFriend);


module.exports = router;
