import React from "react";

import heroimg01 from "../assets/images/hero-img01.png";
import heroimg02 from "../assets/images/hero-img02.png";
import heroimg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import ServiceList from "../Components/Services/ServiceList";
import DoctorCard from "../Components/Doctors/DoctorCard";
import DoctorList from "../Components/Doctors/DoctorList";
import FaqList from "../Components/Faq/FaqList";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/doctors");
  };
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px]
                text-headingColor font-[800] md:text-[60px]
                md:leading-[70px]"
                >
                  We help Patients live a healthy,longer life.
                </h1>

                <p className="text_para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus doloremque hic adipisci illum repudiandae sapiente
                  veniam necessitatibus pariatur blanditiis ea corrupti eum
                  nesciunt optio expedita, vero laudantium aliquid officia
                  quaerat.
                </p>
                <button onClick={handleNavigation} className="btn ">
                  Request an Appointment
                </button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px]lg:text-[44px]">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experince</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px]lg:text-[44px]">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px]lg:text-[44px]">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Satisfaction of Patients</p>
                </div>
              </div>
            </div>
            {/* HERO CONTENT*/}
            <div className="flex gap-[30px] justify-end">
              <div className="w-full">
                <img className="w-full" src={heroimg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroimg02} alt="" />
                <img className="w-full" src={heroimg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World class care for everyone. Our health system offers unmatched
              , expert health care.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] 
          lg:mt-[55px]"
          >
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className=" text-center text-[26px]">Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health system offers
                  unmatched,expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px]
                 h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-center text-[26px]">Find a location</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health system offers
                  unmatched,expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px]
                 h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-center text-[26px]">Book an Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health system offers
                  unmatched,expert health care. From the lab to the clinic
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px]
                 h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/*  Services Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical services</h2>
            <p className="text_para text-center">
              World Class care for everyone. Our health system offers unmatched
              expert health care
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* Features Section  */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2. Search for your physician here ,and contact their office.
                </li>
                <li className="text_para">
                  3. View our physicians who are accepting new patients , use
                  the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img className="w-3/4" src={featureImg} alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]">
                      Tue 24
                    </p>
                    <p className="text-[10px] leading-[10px]lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] lg:leading-5 flex items-center justify-centern bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div
                  className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] 
                lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full
                "
                >
                  Consulation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor ">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Our Great Doctors Section*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors </h2>
            <p className="text_para text-center">
              World Class care for everyone. Our health system offers unmatched
              expert health care
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/*  FAQ SECTION  */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Frequent questions asked by our beloved patients.
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              What our Patients say about us ?
            </h2>
            <p className="text_para text-center">
              World Class care for everyone. Our health system offers unmatched
              expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
