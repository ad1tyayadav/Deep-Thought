import React from 'react'
import { FaQuestion, FaBusinessTime } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";


function FooterIcons() {
    return (
        <div className='flex flex-col relative right-12 mb-6'>
            <div className='self-end flex flex-col gap-4'>
                <FaQuestion className='footerIcon' color='white' />
                <img
                    src="https://deep-thought.netlify.app/assets/Meeting.png" alt="icon"
                    className='bg-[#0029ff] rounded-full w-16 p-2' />
                <img
                    src="https://deep-thought.netlify.app/assets/Schedule.png" alt="icon"
                    className='bg-[#0029ff] rounded-full w-16 p-3' />
            </div>
        </div>
    )
}

export default FooterIcons