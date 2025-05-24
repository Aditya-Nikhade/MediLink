import User from "./../models/UserSchema.js";
import Doctor from "./../models/DoctorSchema.js";
import Booking from "./../models/BookingSchema.js";
import Razorpay from "razorpay";

export const getCheckoutSession = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: doctor.ticketPrice * 100, // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);

    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      orderId: order.id,
      status: "pending"
    });
    await booking.save();

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error creating order" });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    const booking = await Booking.findOne({ orderId: razorpay_order_id });
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }

    booking.status = "confirmed";
    booking.paymentId = razorpay_payment_id;
    await booking.save();

    res.status(200).json({
      success: true,
      message: "Payment verified successfully"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error verifying payment" });
  }
};
