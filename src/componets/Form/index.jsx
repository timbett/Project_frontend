import React from 'react';
import Input from '../InputField';
import TextArea from '../TextArea';
import Button from '../Button';
import { useForm } from 'react-hook-form';


const Form = ({fields, title, className, onSubmit, button, isDisabled, isLoading }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  return (
    <form
      action='#'
      method='POST'
      className={`space-y-6 ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map((i) => {
        if (i.name === 'description') {
          return (
            <TextArea
              name={i.name}
              register={register}
              registerOptions={i.registerOptions}
              label={i.label}
              required={i.required}
              placeholder={i.placeholder}
              className={i.className}
              error={errors[i.name]}
              key={i.name}
              disabled={isDisabled}
            />
          );
        }

        return (
          <Input
            name={i.name}
            register={register}
            registerOptions={i.registerOptions}
            type={i.type}
            label={i.label}
            required={i.required}
            placeholder={i.placeholder}
            className={i.className}
            error={errors[i.name]}
            key={i.name}
            disabled={isDisabled}
          />
        );
      })}

      <div>
        <Button {...button} isLoading={isLoading} disabled={isDisabled} />
      </div>
    </form>
  )
}

export default Form

