import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-[#050816] ">
          <div className="bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Intro />
          </div>
          <div className="bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center">
            <About />
          </div>

          <div className="relative z-0">
            <Contact />

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
