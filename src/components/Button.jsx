import React from 'react'

function Button({ text, className = '', ...props }) {

    function handlechange(e) {
        e.preventDefault();
        console.log('Button Clicked');
        
    }

    return (
        <button
            onClick={handlechange}
            className={`p-2 relative bg-[#0029ff] text-white rounded ${className}`}
            {...props}
        >
            {text}
        </button>
    )
}

export default Button