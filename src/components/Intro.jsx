import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./Computer";

const Intro = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center ${styles.heroBackground}`}>
      <div className={`${styles.paddingX} absolute inset-0 lg:top-[100px] top-[60px] flex items-start gap-5 max-w-7xl mx-auto`}>
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className="text-[#915EFF]">Yash Kumar Gurjar</span>
          </h1>
          <p className={styles.heroSubText}>
            I develop user <br className="sm:block hidden" /> interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-10 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-4 h-4 rounded-full bg-[#aaa6c3]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Intro;
