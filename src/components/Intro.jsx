import { motion } from 'framer-motion';
import { styles } from "../styles";
import ComputersCanvas from './Computer';

const Intro = () => {
    return (
        <section className='relative w-full h-screen mx-auto' >
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] left-[100px] max-w-7x1 mx-auto flex flex-row items-start gap-[5px]`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-[25px] h-[25px] rounded-full bg-[#915eff]' />
                    <div className='w-[4px] sm:h-[80px] h-[15rem] violet-gradient' />
                </div>
                <div className='p-[1rem]'>
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I'm <span className='text-[#915eff] '>Yash Kumar Gurjar</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-[10px] text-white-100 text-[20px]`}>
                        I develop user <br className='sm:block hidden' />
                        interfaces and web applications
                    </p>
                </div>
            </div>
            <ComputersCanvas />
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-[50rem] border-4 border-[#aaa6c3] flex justify-center items-start'>
                        <motion.dev
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatTypr: 'loop'
                            }}
                            className='w-[1rem] h-[1rem] rounded-full bg-[#aaa6c3] mb-[1px]'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Intro;