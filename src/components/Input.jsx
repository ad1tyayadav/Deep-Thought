import React from 'react'

function Input({text}) {
    return (
        <div className="w-full bg-gray-100 rounded-lg shadow pt-3 relative top-16">
            <div className="text-sm font-bold relative left-2 text-gray-700 mb-2">
                {text}
            </div>
            <textarea
                className="w-full h-[100%] rounded-lg border border-gray-300 rounded p-2 text-sm text-gray-500 resize-none"
                placeholder="Enter Text here"
            ></textarea>
        </div>
    )
}

export default Input