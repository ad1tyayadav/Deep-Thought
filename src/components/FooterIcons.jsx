import React from 'react'
import { FaQuestion, FaBusinessTime } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";


function FooterIcons() {
    return (
        <div className='flex flex-col relative right-12 mb-6'>
            <div className='self-end flex flex-col gap-4'>
                <FaQuestion className='footerIcon' color='white' />
                <IoIosPeople className='footerIcon' color='white' />
                <FaBusinessTime className='footerIcon' color='white' />
            </div>
        </div>
    )
}

export default FooterIcons