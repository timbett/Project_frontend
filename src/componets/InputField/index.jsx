const Input = ({
    label,
    name,
    required,
    type,
    register,
    registerOptions,
    className,
    error,
    disabled
}) => {
    return (
        <div>
            {label && (
                <label htmlFor='name' className='text-base text-gray-500'>
                    {label}
                </label>
            )}

            <input
                {...register(name, {
                    ...registerOptions,
                })}
                type={type}
                name={name}
                id={name}
                autoComplete={name}
                placeholder={label}
                required={required}
                className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${disabled ? 'bg-gray-200' : 'bg-white'} ${className}`}
                disabled={disabled}
            />
            <p className='text-red'>{error}</p>
        </div>
    );
};

export default Input;