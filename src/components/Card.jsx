import React from 'react'
import { IoInformationCircle } from "react-icons/io5";

function Card({ title, desc, content }) {

    return (
        <div className='flex w-full mb-4'>
            <div className='w-[80%] h-[75vh] shadow-lg border border-2 rounded-[8px] bg-[#fdfdfd]'>
                <div className='bg-black flex rounded-t-[6px] w-full flex h-[4vh]  justify-between items-center'>
                    <h2 className='text-sm  text-white flex font-semibold ml-24'>
                        {title}
                    </h2>
                    <IoInformationCircle className='cursor-pointer mr-2 text-xl' color='white' />
                </div>
                <p className='relative top-4 pl-4 shadow h-20 w-full'>
                    <b>Description:</b> {desc}
                </p>
           <div>{content}</div>
            </div>
        </div>
    )
}

export default Card