

import React from 'react'


const Button = ({
    label,
    type,
    onClick,
    className,
    isLoading,
    disabled
}) => {
    return (
        <button
            disabled={disabled || isLoading}
            type={type}
            onClick={onClick}
            className={`flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-brand-primary-dark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${disabled
                    ? 'bg-gray-500 hover:bg-gray-500 cursor-not-allowed '
                    : 'bg-gray-800 '
                } ${className}`}
        >
            {!isLoading ? label : 'Loading...'}
        </button>
    );
};

export default Button