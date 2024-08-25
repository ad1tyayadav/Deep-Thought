import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Collapsible({ title, children, btn, className = '', ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-[75%] m-4 border rounded-md shadow-sm">
            <div
                className={`p-4 cursor-pointer flex justify-between items-center ${className}`}
                onClick={toggleCollapse}
                {...props}
            >
                <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                <h2 className="text-xl font-semibold relative right-60">{title}</h2>
            </div>
            {isOpen && (
                <div className="p-4 flex flex-col gap-2">
                    <p>{children}</p>
                    <button className='text-sm text-gray-500 self-end'>
                        {btn}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Collapsible;
