import React, { useState, useRef } from 'react';
import StarWrapper from '../hoc/SelectionWrapper';
import { styles } from '../styles';
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import EarthCanvas from './EarthCanvas';
// import emailjs from '@emailjs/browser';
// import {EarthCanvas} from './canvas';



const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {

    }
    const handleSubmit = (e) => {

    }
    return (
        <div className='xl:mt-[12rem] flex-row  flex gap-[10px] justify-between overflow-hidden'>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75rem] bg-[#5d69b3f0] p-[2rem] rounded-[2rem] w-[50rem]'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-[12px] flex flex-col gap-[1rem]'
                >
                    <label className='flex flex-col'>
                        <span className='text-[White] font-medium mb-[4px]'>
                            Your Name
                        </span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className='w-[50%] bg-[white] py-[5px] px-[1rem] placeholder:text-[secondary] text-tertiary rounded-full outline-none border-none font-medium'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-[White] font-medium mb-[4px]'>
                            Your Email
                        </span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className='w-[50%] bg-[white] py-[5px] px-[1rem] placeholder:text-[secondary] text-tertiary rounded-full outline-none border-none font-medium'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-[White] font-medium mb-[4px]'>
                            Your Message
                        </span>
                        <textarea
                            rows={8}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className='w-[80%] bg-[white] py-[8px] px-[1rem] placeholder:text-[secondary] text-tertiary outline-none border-none rounded-[1rem] font-medium'
                        />
                    </label>
                    <button
                        type='submit'
                        className='bg-[#6d37b8f0] py-[5px] px-[8px] outline-none w-full text-[white] font-bold shadow-primary rounded-[1.5rem] cursor-pointer'>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h--auto md:h-[550px] h-[350px] w-[60rem]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default StarWrapper(Contact, "contact");
