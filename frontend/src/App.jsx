import "./app.css";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Page Components
import Home from "./pages/Home";
import Doctors from "./pages/Doctors/Doctors";
import DoctorDetails from "./pages/Doctors/DoctorDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}

export default App;
