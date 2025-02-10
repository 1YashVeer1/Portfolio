import React, { useState } from "react";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import yashveer from '../assets/yashveer.jpg'
import StarWrapper from "../hoc/SelectionWrapper";




const About = () => {
  const [readmore, setReadMore] = useState(false)
  return (
    <div className="h-screen w-full">
      <motion.div className="mt-[10rem] p-[1rem]">
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="flex justify-between w-full sm:flex-col  lg:flex-row">
        <div className=" w-[50rem] flex Items-center justify-center" >
          <div className="lg:block w-[400px] md:w-[300px] md:h-[300px] lg:w-[450px]  h-[400px] lg:h-[450px] mt-[50px] lg:top-[100px] ml-0 lg:ml-[100px] rounded-full overflow-hidden"
            style={{ transform: "translate(40px, 50px)", boxShadow: "rgba(176, 108, 249, 0.7) 0px 0px 15px 5px", }}>
            <img src={yashveer} alt="Yashveer Gurjar" loading="lazy" className="w-full h-full object-cover" />
          </div>

        </div>
        <div className="w-[60rem] mr-[5rem] sm:m-[2rem]">
          <div className="text-[1.5rem] mt-[20px] lg:mt-[120px] xl:mt-[5px] font-light p-[2rem] lg:p-[8rem] leading-6 lg:leading-10 lg:text-[1.5rem] md:text-[1.2rem] md:leading-8 md:p-[6rem] text-justify lg:text-normal xl:text-[1.7rem]">
            Hi there! I’m &nbsp;
            <span className="text-[#a024ff] text-[1.2rem] lg:text-[1.7rem] xl:text-[1.5rem] ">Yash Kumar Gurjar</span>
            , a passionate &nbsp;
            <strong className="text-[1.2rem] lg:text-[1.7rem] xl:text-[1.3rem] ">React.js developer</strong>&nbsp;
            with over a year of experience building interactive, user-friendly web applications. I specialize in creating dynamic front-end experiences, but recently, I’ve expanded my skills to Node.js, focusing on building robust back-end systems.
            <br></br>
            I’m always excited about learning new technologies and tools that can enhance my development workflow and improve the user experience.
            <a style={{ cursor: "pointer" }} onClick={(()=>setReadMore(!readmore))}> Read more...</a>
            {readmore ?
              <p>Currently, I'm working on combining my front-end expertise with back-end skills to create full-stack applications that are both functional and efficient. When I’m not coding, you can find me exploring new tech trends, or working on personal projects to constantly improve my craft. Let’s build something great together! I’m committed to delivering high-quality, maintainable solutions that align with your project goals, and I’m always eager to collaborate and contribute to the success of your team.</p>
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}
export default StarWrapper(About, "about");

{/* <div className="hidden lg:block w-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] opacity-[0.7] h-[200px] lg:h-[450px] mt-[100px] lg:top-[100px] ml-0 lg:ml-[100px] rounded-full overflow-hidden"
    style={{ transform: "translate(40px, 50px)", boxShadow: "rgba(176, 108, 249, 0.7) 0px 0px 15px 5px", transition: "box-shadow 0.3s ease-in-out 0s" }}>
    <img src={protfolioImg} alt="Prashant Joshi" loading="lazy" class="w-full h-full object-cover" />

</div> */}