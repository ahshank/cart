import express from "express";
import { login, registration, logOut, googlelogin, adminLogin } from "../controller/authController.js";

const authRoutes = express.Router();
authRoutes.post("/registration", registration);
authRoutes.post("/login", login);
authRoutes.get("/logout", logOut);
authRoutes.post("/googlelogin", googlelogin);
authRoutes.post("/adminlogin", adminLogin);

export default authRoutes;