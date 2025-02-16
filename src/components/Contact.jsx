import React, { useState, useRef } from 'react';
import StarWrapper from '../hoc/SelectionWrapper';
import { styles } from '../styles';
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import EarthCanvas from './EarthCanvas';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [e.target.name]: '' });
  }

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required!";
    if (!form.email.trim()) newErrors.email = "Email is required!";
    else if (!isValidEmail(form.email)) newErrors.email = "Invalid email format!";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty!";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);

    emailjs.send(
      'service_451tejs',
      'template_2jvtzjf',
      {
        user_name: form.name,
        to_name: 'Yashveer',
        user_email: form.email,
        to_email: 'yashkumargurjar55@gmail.com',
        message: form.message
      },
      'EcvZJJpDGTUd3S54I'
    ).then(() => {
      setLoading(false);
      toast.success('thank you. I will get back to you as soon as possible.');
      setForm({
        name: "",
        email: "",
        message: "",
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      toast.error('something went wrong');
    }
    );
  };

  return (
    <div className='w-full h-screen flex justify-between gap-10 sm:flex flex-col lg:flex-row md:flex'>
      <div className='lg:w-[50%] sm:w-full h-full'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='p-8 rounded-2xl '
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='xl:mt-12 sm:flex gap-4 flex flex-col xl:gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-[White] font-medium mb-4'>
                Your Name
              </span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-[white] py-4 px-6 placeholder:text-[secondary] text-[#0a0a5d] rounded-full outline-none border-none font-medium'
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
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
                className='bg-[white] py-4 px-6 placeholder:text-[secondary] text-[#0a0a5d] rounded-full outline-none border-none font-medium'

              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
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
                className='bg-[white] py-4 px-6 placeholder:text-[secondary] text-[#0a0a5d] rounded-[1rem] outline-none border-none font-medium'

              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </label>
            <button
              type='submit'
              className='bg-[#6d37b8f0] py-[5px] px-[8px] outline-none w-full text-[white] font-bold shadow-primary rounded-lg cursor-pointer'>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </div>
      <div className='lg:w-[50%] sm:w-full h-full'>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h--auto md:h-[550px] h-[350px] xl:mt-[200px] '
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>

  )
}

export default StarWrapper(Contact, "contact");
