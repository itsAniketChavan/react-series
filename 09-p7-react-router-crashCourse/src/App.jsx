
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User"
import Github from "./Components/GitHub/GitHub";


function App() {
  return (
    <>

      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/*" element={<User />} />
          <Route path="/github" element={<Github />} />

        </Routes>
      </main>

      <Footer/>
    </>
  );
}

export default App;
