import React from "react";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ProfileSection />
      <AboutSection />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
