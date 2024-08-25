import React from 'react'
import { FaHome, FaBell, FaTools } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function Header() {
    return (
        <header className='w-full h-[8vh] bg-[#f0f0f0]'>
            <nav className='flex items-center justify-between pl-20 pr-20 pt-3.5'>
                <img src="/logo.svg" alt="logo" />
                <ul className='flex justify-between white w-[15vw]'>
                    <div className='icon-wrapper'>
                        <FaHome color='white' />
                    </div>
                    <div className="icon-wrapper">
                        <FaTools color="white" />
                    </div>
                    <div className="icon-wrapper">
                        <FaBell color="white" />
                    </div>
                    <div className='flex items-center w-8 rounded-full cursor-pointer'>
                        <img className="rounded-full" src="/setup.jpeg" alt="logo" />
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <BsThreeDotsVertical color="#3683f0" />
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header