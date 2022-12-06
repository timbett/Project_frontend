const TextArea = ({
    label,
    name,
    required,
    register,
    registerOptions,
    className,
    error,
    disabled,
}) => {
    return (
        <div>
            <label
                htmlFor={name}
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
                {label}
            </label>
            <textarea
                {...register(name, {
                    ...registerOptions,
                })}
                name={name}
                id={name}
                disabled={disabled}
                autoComplete={name}
                rows={5}
                required={required}
                className={`block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${disabled ? 'bg-gray-200' : 'bg-white'
                    } ${className}`}
                placeholder='Event description...'
            ></textarea>
            <p className='text-red-900'>{error}</p>
        </div>
    );
};

export default TextArea