import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const ProfileSection = lazy(() => import("./components/ProfileSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <ProfileSection />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
