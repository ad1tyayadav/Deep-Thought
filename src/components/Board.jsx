import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { PiNumberSquareOne } from "react-icons/pi";

function Board({ title, children, className = '', ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`absolute transition-all duration-300 border rounded-md shadow-lg h-[69vh] ${isOpen ? 'w-auto bg-white z-[100]' : 'w-[8%] bg-transparent z-[10]'}`}
        >
            <div
                className="cursor-pointer"
                onClick={toggleCollapse}
                {...props}
            >
                <div className="w-full bg-[#000000] rounded-t-xl p-2 flex justify-between items-center flex">
                    <h2 className='text-sm font-semibold text-white flex items-center text-whilte'>
                        {isOpen && title}
                    </h2>
                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                        {isOpen ? <FaArrowLeft /> : <FaArrowRight className='mr-12' />}
                    </span>
                </div>
                {isOpen && (
                    <div className="w-full text-white">
                        <div className={`mt-2 bg-white w-[24vw] pl-12 pt-8 flex flex-col gap-2 text-black ${className}`}>
                            {children}
                        </div>
                    </div>
                )}
                 {!isOpen && <PiNumberSquareOne className='text-6xl m-auto mt-4' color='#5f78fe'/>}
            </div>
        </div>
    );
}

export default Board;
