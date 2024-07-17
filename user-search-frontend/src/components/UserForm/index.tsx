import React from 'react';
import { useForm } from 'react-hook-form';
import './userForm.css'; 
import InputMask from 'react-input-mask';
import { User } from '../../types/UserContracts';



type UserFormProps = {
  onSubmitSuccess: (data: User) => void;
  resetForm: () => void;
};

const UserForm: React.FC<UserFormProps> = ({ onSubmitSuccess, resetForm }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<User>({
    mode: 'onChange'
  });

  const onSubmit = (data: User) => {
    const cleanedData: User = {
      email: data.email,
      number: data.number ? data.number.replace(/-/g, '') : "",
    };
    onSubmitSuccess(cleanedData);
    resetForm();
  };

  return (
    <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Email:</label>
        <input 
          {...register('email', { 
            required: 'Email is required', 
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          })} 
        />
        {errors.email && <p className='error-message'>{errors.email.message}</p>}
      </div>
      <div className="form-group">
          <label>Number:</label>
          <InputMask 
              mask="99-99-99" 
              {...register('number', {
                pattern: {
                  value: /^[0-9]{2}-[0-9]{2}-[0-9]{2}$/,
                  message: 'Invalid number format',
                },
              })} 
            />
          {errors.number && <p className='error-message'>{errors.number.message}</p>}
        </div>
      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
};

export default UserForm;