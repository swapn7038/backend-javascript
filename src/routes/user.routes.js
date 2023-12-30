// how to make routers, how to use them and later export them 

import express from "express";
import router from express.Router();
import { registerUser } from "../controllers/user.controller";

router.route('/register').post(registerUser);

export default user;