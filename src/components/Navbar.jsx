import { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import protfolioImg from '../assets/portfoliologo.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


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
        <nav className={`${styles.paddingX} w-full flex items-center py-[5px] fixed top-0 z-20 bg-[#5b5c5e8d]`}
        >
            <div className="w-full flex justify-between items-center max-w-7x1">
                <Link to="/" className="flex items-center gap-[2px]" style={{ textDecoration: "none" }}
                    onClick={() => { setActive(""); window.scrollTo(0, 0) }}
                >
                    <img src={protfolioImg} alt="logo" className="w-[5rem] h-[5rem] object-contain" />
                    <p className="text-[18px] font-bold cursor-pointer contain">Yashveer</p> &nbsp;
                    <span className="sm:block  text-white text-[18px]">| Portfolio</span>
                </Link>

                <ul className="list-none flex flex-row gap-[10px] text-[white]" style={{ textDecoration: "none" }}>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? "text-[white]" : "text-[#939191]"} hover:text-[pink] text-[22px] font-medium cursor-pointer list-none`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* <div>
                    <div className="sm:hidden flex flex-1 justify-end items-center relative">
                        {toggle ?
                            <CloseIcon className="w-[28px] h-[28px] object-contain cursor-pointertext-[white]" onClick={() => setToggle(!toggle)} />
                            :
                            <MenuIcon className="w-[28px] h-[28px] object-contain cursor-pointertext-[white]" onClick={() => setToggle(!toggle)}
                            />

                        }
                        <div className={`${!toggle ? 'hidden' : 'flex'} p-[6px] bg-[black] absolute top-10 right-0 mx-[4px] my-[2px] min-w-[140px] z-10 rounded-xl`}>
                            <ul className="list-none flex items-start justify-end flex-col gap-4 ">
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
                </div> */}
            </div>

        </nav >


    )
}
export default Navbar;