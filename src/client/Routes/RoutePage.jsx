import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "../layout/LayoutPage";
import About from "../Pages/Stduent/AboutUs/About";
import Homepage from "../Pages/Stduent/Home/Homepage";
import Contact from "../Pages/Stduent/ContactUs/Contact";
import Student_Form from "../Pages/Stduent/Student_Form/Form-Student";
import SignInPage from "../Pages/Stduent/SignIn/SignInPage";
import SignUpPage from "../Pages/Stduent/SignUp/SignUpPage";
import PDF from "../Pages/Stduent/Pdf-Form/PDF";
import Upload_Document from "../Pages/Stduent/Upload_Final_Doc/Upload_Document";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="Home" element={<Homepage />} />
          <Route path="" element={<SignInPage />} />
          <Route path="Sign_Up" element={<SignUpPage />} />
          <Route path="About_us" element={<About />} />
          <Route path="Contact_Us" element={<Contact />} />
          <Route path="Student" element={<Student_Form />} />
          <Route path="Pdf-Form" element={<PDF />} />
          <Route path="Upload" element={<Upload_Document />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
