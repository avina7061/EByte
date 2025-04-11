import express from "express";
// import { handelUserSignUp, handelUserLogin } from "../controllers/user.js";
import userController from "../controllers/user.js";

const router = express.Router();

router.route('/signup').post(userController.handelUserSignUp);

router.route('/login').post(userController.handelUserLogin);

router.route('/logout').post(userController.handelUserLogout);

export default router;
