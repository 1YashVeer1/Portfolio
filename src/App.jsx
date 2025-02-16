import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import ParticlesBackground from "./components/ParticlesBackground";
import "./index.css";
import { ClipLoader } from "react-spinners";

const Navbar = lazy(() => import("./components/Navbar"));
const Intro = lazy(() => import("./components/Intro"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <ClipLoader color="#ffffff" size={50} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
    <div className="relative z-0 bg-[#050816]">
      <ParticlesBackground />
      
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Intro />
        <About />
        <Contact />
      </Suspense>
    </div>
  </BrowserRouter>
);

export default App;
