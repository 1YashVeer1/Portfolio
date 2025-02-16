import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import { ToastContainer } from "react-toastify";
import ParticlesBackground from "./components/ParticlesBackground";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-[#050816]">
          <ToastContainer position="top-right" autoClose={3000} />
          <ParticlesBackground />
          <Navbar />
          <Intro />
          <About />
          {/* <div className="relative z-0"> */}
            <Contact />
          {/* </div> */}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
