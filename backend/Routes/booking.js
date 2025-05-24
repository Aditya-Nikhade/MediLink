import express from "express";
import { authenticate } from "../auth/verifyToken.js"
import { getCheckoutSession, verifyPayment } from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession);
router.post("/verify-payment", authenticate, verifyPayment);

export default router;
