import React from "react";
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer/Index";
// import ResumePage from "./ResumePage";
// import AboutPage from "./AboutPage";
// import PortfolioPage from "./PortfolioPage";
// import ContactPage from "./ContactPage";

function App() {
  return (
    // <Router>
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<AboutPage />} />

    //     <Route path="/resume" element={<ResumePage />} />

    //     <Route path="/portfolio" element={<PortfolioPage />} />

    //     <Route path="/contact" element={<ContactPage />} />
    //   </Routes>

    //   <Footer />
    // </Router>
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>

  );
}

export default App;
