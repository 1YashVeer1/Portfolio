import { useState } from "react";
import { Link } from "react-router-dom";
import protfolioImg from '../assets/portfoliologo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileOpenIcon from '@mui/icons-material/FileOpen';


const Navbar = () => {
    const navLinks = [
        {
            id: "about",
            title: "About",
        },
        {
            id: "Project",
            title: "Project",
        },
        {
            id: "contact",
            title: "Contact",
        },
    ];

    const [active, setActive] = useState("")
    const [toggle, setToggle] = useState(false)

    return (
        <nav className={`w-full flex items-center justify-between px-6 xl:py-5 sm:py-2 xs:py-2  fixed top-0 z-20 bg-[#7272738d]`}
        >
            <div className="w-full">
                <Link to="/" className="flex items-center gap-[2px]"
                    onClick={() => { setActive(""); window.scrollTo(0, 0) }}
                >
                    <img src={protfolioImg} alt="logo" className="w-9 h-9 object-contain" />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">Yashveer</p> &nbsp;
                    <span className="hidden sm:block  text-white text-[18px]">| Portfolio</span>
                </Link>
            </div>

            <div className="flex items-center"> 
                <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-[white]" : "text-[#939191]"} hover:text-blue-500 text-[22px] font-medium cursor-pointer list-none`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex xl:flex flex-row gap-5 ml-5 sm:block mr-2">
                    <a href="https://www.linkedin.com/in/yash-veer-78305a232/"><LinkedInIcon className="bg-blue-500 rounded-lg p-1" /></a>
                    <a href="/public/YashveerResume.pdf" download="YashveerResume.pdf" target="_blank" rel="noopener noreferrer"><FileOpenIcon className="bg-blue-500 rounded-lg p-1" /></a>
                </div>
            </div>


            <div>
                <div className="sm:hidden flex flex-1 justify-end items-center relative">
                    {toggle ?
                        <CloseIcon className="w-[28px] h-[28px] object-contain cursor-pointertext-[white]" onClick={() => setToggle(!toggle)} />
                        :
                        <MenuIcon className="w-[28px] h-[28px] object-contain cursor-pointertext-[white]" onClick={() => setToggle(!toggle)}
                        />

                    }
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-5 bg-[black] absolute top-8 right-0 min-w-140 z-10 rounded-xl`}>
                        <ul className="list-none flex items-start justify-end flex-col gap-2 ">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active === link.title ? "text-[white]" : "text-[#939191]"}  text-[16px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </nav >


    )
}
export default Navbar;