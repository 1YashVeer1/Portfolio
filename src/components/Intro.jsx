import { motion } from 'framer-motion';
import { styles } from "../styles";
import ComputersCanvas from './Computer';

const Intro = () => {
    return (
        <section className={`relative w-full h-screen mx-auto bg-[url('/src/assets/herobg.png')] bg-cover bg-no-repeat bg-center`} >
            <div className={`${styles.paddingX} absolute inset-0 lg:top-[100px] sm:flex top-[60px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className='xl:p-[1rem] xs:flex p-0'>
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I'm <span className='text-[#915eff] '>Yash Kumar Gurjar</span>
                    </h1>
                    <p className={`${styles.heroSubText} `}>
                        I develop user <br className='sm:block hidden' />
                        interfaces and web applications
                    </p>
                </div>
            </div>
            <ComputersCanvas />
            <div className='absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-1 '>
                        <motion.dev
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatTypr: 'loop'
                            }}
                            className='w-[1rem] h-[1rem] rounded-full bg-[#aaa6c3]'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Intro;