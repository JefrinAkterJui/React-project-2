import React, { useEffect, useState } from 'react'
import './SideNavbar.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineBulb } from "react-icons/ai";
import { TiPinOutline } from "react-icons/ti";
import { GoTrash } from "react-icons/go";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";

const SideNavbar = () => {
    const [toggleValue, setToggleValue] = useState(false);
    // ========== saving the mode when user  visitor
    useEffect(() => {
      const savedMode = localStorage.getItem("mode") || "light";
      localStorage.setItem("mode", savedMode);
      document
        .querySelector("html")
        .classList.toggle("dark", savedMode === "dark");
    }, []);
    // ========== changing the mode on toggle
    const handelMode = () => {
      if (localStorage.getItem("mode") == "light") {
        localStorage.setItem("mode", "dark");
        document.querySelector("html").classList.add("dark");
        setToggleValue(!toggleValue);
      } else {
        localStorage.setItem("mode", "light");
        document.querySelector("html").classList.remove("dark");
        setToggleValue(!toggleValue);
      }
    };

    return (
        <>
            <nav className='Jui-Nav dark:bg-[#202124]'>
                <div className="main_nav">
                    <div className="container">
                        <ul>
                            <li className='NavOne'>
                                <NavLink
                                to="/"
                                className={({ isActive }) =>[isActive ? "ActivePage" : "NotActivePage", ].join(" ")}
                                    >
                                    <AiOutlineBulb className='icon1'/>
                                    Notes
                                </NavLink>
                                <NavLink
                                to="/PinNote"
                                className={({ isActive }) =>[isActive ? "ActivePage" : "NotActivePage", ].join(" ")}
                                    >
                                    <TiPinOutline className='icon1'/>
                                    Pin Notes
                                </NavLink>
                                <NavLink
                                to="/BinNote"
                                className={({ isActive }) =>[isActive ? "ActivePage" : "NotActivePage", ].join(" ")}
                                    >
                                    <GoTrash className='icon1 b'/>
                                    Bin
                                </NavLink>
                            </li>
                        </ul>
                        <div className="mode pl-[39px] mt-[20px]">

                            {localStorage.getItem("mode") == "light" ? (
                                <button
                                className="py-4 px-6 bg-[#000]  text-[#fff] rounded-[10px] text-[16px] font-Popins font-semibold"
                                onClick={handelMode}
                                >
                                   <BsMoonStarsFill />
                                </button>
                                ) : (
                                    <button
                                    className="py-4 px-6 bg-[#41331C] text-[#fff] rounded-[10px] text-[16px] font-Popins font-semibold "
                                    onClick={handelMode}
                                    >
                                    <FiSun />
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </nav>
        </>
     )
}

export default SideNavbar