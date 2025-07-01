import express from "express";
import { allOrders, PlaceOrder, placeOrderRazorpay, updateStatus, userOrders, verifyRazorpay } from "../controller/orderController.js";
import isAuth from "../middleware/isAuth.js";
import adminAuth from "../middleware/adminAuth.js";

let orderRoutes = express.Router();


// for user
orderRoutes.post("/placeorder", isAuth, PlaceOrder);
orderRoutes.post("/razorpay", isAuth, placeOrderRazorpay);
orderRoutes.post("/userorder", isAuth, userOrders);
orderRoutes.post("/verifyrazorpay", isAuth, verifyRazorpay);

// for admin
orderRoutes.post("/list", adminAuth, allOrders);
orderRoutes.post("/status", adminAuth, updateStatus);


export default orderRoutes;