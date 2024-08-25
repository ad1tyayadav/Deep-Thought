import React from 'react'
import { MdLightbulb } from "react-icons/md";
import { MdComment } from "react-icons/md";
import { BsQuestionSquareFill } from "react-icons/bs";
import Button from './Button';
import Input from './Input';

function CardTwoFoot() {
    return (
        <>
            <div className='flex items-center relative top-28 left-20 w-[100%] gap-3'>
                <div className='flex justify-between w-[40%] items-center relative gap-2'>
                    <MdLightbulb className='text-2xl' />
                    <MdComment className='text-2xl' />
                    <BsQuestionSquareFill />
                    <img className='relative w-6' src="/Icon.png" alt="" />
                </div>
                <div className='flex w-[90%] gap-2'>
                    <select className="p-1 text-sm bg-white border border-gray-300 rounded-lg shadow">
                        <option>Select Categ</option>
                    </select>
                    <select className="p-1 text-sm bg-white border border-gray-300 rounded-lg shadow">
                        <option>Select Proces</option>
                    </select>
                </div>
            </div>
            <Button className='text-sm relative top-40 left-8' text={'+ Sub-thread'} />
            <div className='relative top-28 left-5 w-[27.5vw] h-full'>
                <Input text={'Summary for thread A'} />
            </div>
        </>

    )
}

export default CardTwoFoot