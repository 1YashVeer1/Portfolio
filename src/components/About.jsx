import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import yashveer from "../assets/yashveer.jpg";
import StarWrapper from "../hoc/SelectionWrapper";
import { slideIn } from "../utils/motion";

const About = () => {
  const imageMotion = useMemo(() => slideIn("left", "tween", 0.2, 1), []);
  const textMotion = useMemo(() => slideIn("right", "tween", 0.2, 1), []);

  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row gap-10 justify-between">
        {/* Image Section */}
        <motion.div
          variants={imageMotion}
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden mx-auto mt-10 lg:mt-0 shadow-lg"
        >
          <img src={yashveer} alt="Yashveer Gurjar" loading="lazy" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Section */}
        <motion.div variants={textMotion} className="lg:w-[50%] text-justify p-4 lg:p-8">
          <p className="text-lg lg:text-xl leading-7 lg:leading-9 font-light">
            Hi there! I’m{" "}
            <span className="text-[#a024ff] font-semibold">Yash Kumar Gurjar</span>, a passionate{" "}
            <strong>React.js developer</strong> with over a year of experience building interactive, user-friendly web applications.
            <br />
            <br />
            I specialize in front-end development, but recently, I’ve expanded my skills to Node.js, focusing on building robust back-end systems.
            I’m always eager to learn new technologies and improve user experiences.
            <br />
            <br />
            Currently, I’m combining my front-end expertise with back-end knowledge to create efficient full-stack applications.
            Let’s build something great together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StarWrapper(About, "about");
