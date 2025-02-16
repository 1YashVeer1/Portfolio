import React, { useState } from "react";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import yashveer from '../assets/yashveer.jpg'
import StarWrapper from "../hoc/SelectionWrapper";
import { slideIn } from "../utils/motion";




const About = () => {
  const [readmore, setReadMore] = useState(false)
  return (
    <div>
      <motion.div>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className=" w-full flex justify-between gap-10 sm:flex flex-col lg:flex-row ">
        <div className="xl:w-[50%] sm:w-full">
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="w-[250px] h-[250px] m-auto md:w-[300px] md:h-[300px] lg:w-[450px] opacity-[0.7] lg:h-[450px] mt-10 lg:top-[100px] rounded-full overflow-hidden"
            style={{ transform: "translate(40px, 50px)", boxShadow: "rgba(176, 108, 249, 0.7) 0px 0px 15px 5px", transition: "box-shadow 0.3s ease-in-out 0s" }}>
            <img src={yashveer} alt="Yashveer Gurjar" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}>
          <div className="text-1 lg:mt-120 xl:mt-5 font-light p-2 lg:p-8 leading-6 lg:leading-10 lg:text-1.5 md:text-1.2 md:leading-8 md:p-6 text-justify lg:text-normal xl:text-[1.5rem]">
            Hi there! I’m &nbsp;
            <span className="text-[#a024ff] text-[1.2rem] lg:text-[1.7rem] xl:text-[1.5rem]">Yash Kumar Gurjar</span>
            , a passionate &nbsp;
            <strong className="text-[1.2rem] lg:text-[1.7rem] xl:text-[1.3rem] ">React.js developer</strong>&nbsp;
            with over a year of experience building interactive, user-friendly web applications. I specialize in creating dynamic front-end experiences, but recently, I’ve expanded my skills to Node.js, focusing on building robust back-end systems.
            <br></br>
            <p>I’m always excited about learning new technologies and tools that can enhance my development workflow and improve the user experience. <br></br>
              Currently, I'm working on combining my front-end expertise with back-end skills to create full-stack applications that are both functional and efficient. When I’m not coding, you can find me exploring new tech trends, or working on personal projects to constantly improve my craft. Let’s build something great together! I’m committed to delivering high-quality, maintainable solutions that align with your project goals, and I’m always eager to collaborate and contribute to the success of your team.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
export default StarWrapper(About, "about");
