import React, { useId } from 'react'

// ForwardRef receives the ref from the parent and it takes a func as input that takes 2 params. One is the props and 2nd one is the ref. From react 19, forwardRef is not required as ref can be passed from parent to child as props too
const Input = React.forwardRef(function InputFunc({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()

    return (
        <div className="w-full">
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input