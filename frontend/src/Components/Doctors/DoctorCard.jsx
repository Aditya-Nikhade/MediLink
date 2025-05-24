import React, { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const DoctorCard = ({ doctor }) => {
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate successful payment
      const success = Math.random() > 0.3; // 70% success rate
      
      if (success) {
        toast.success("Payment successful! Appointment booked.");
        navigate("/checkout-success");
      } else {
        toast.error("Payment failed. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const {
    name,
    averageRating,
    totalRating,
    photo,
    specialization,
    experiences,
  } = doctor;

  return (
    <div className="p-3 lg:p-5">
      <div className="flex items-center ml-5">
        <span>
          <FaUserMd className="text-[80px] text-blue-500" />
        </span>
        <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9">
          {name}
        </h2>
      </div>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {specialization}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text[16px] lg:leading-7 font-semibold text-headingColor ">
            <img src={starIcon} alt="" /> {averageRating}
          </span>
          <span className="text-[14px] leading-6 lg:text[16px] lg:leading-7 font-[400] text-textColor ">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {experiences && experiences[0]?.hospital}
          </p>
        </div>
        <Link
          to={`/doctors/${doctor._id}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{doctor.bio}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-indigo-600">
            ₹{doctor.ticketPrice}
          </span>
          <button
            onClick={handleBooking}
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Processing..." : "Book Appointment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
