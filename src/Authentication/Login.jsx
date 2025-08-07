import React from 'react';
import InputField from './components/InputField';
import { useForm } from '../Context/UserContext';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { formData } = useForm();

  const navigate = useNavigate();
  const inputfield = [
    // { placeholder: 'Name', name: 'name', type: 'text' },
    { placeholder: 'Enter your email', name: 'email', type: 'email' },
    { placeholder: 'Password', name: 'password', type: 'password' },
    // { placeholder: 'Company', name: 'company', type: 'text' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =  formData.email && formData.password;
    if(isValid){
    console.log(formData);
    navigate('/home')}
    else{
      alert('please fill all field')
    }
  };

  return (
    <div className="flex px-4 md:h-screen justify-center items-center">
      <div className="flex flex-col gap-8 w-96">
        <div>
         <h1 className="Lato text-lg">Welcome back</h1>
        <p className='text-sm text-[#89868D] lato'>Welcome back please enter your details</p>
        </div>
       
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {inputfield.map((field, index) => (
            <InputField key={index} {...field} />
          ))}

          
          <Button
            label="Sign in"
            type="submit"
            style="bg-[#0039BA] text-white"
          />
        </form>

    
        <Button
          label="Sign in with Google"
          style="bg-[#DECCFE] text-[#3A3541]"
          onClick={() => alert('Google sign-up coming soon...')}
        />
          <Link to = '/signup'>
           <p className="text-center hover:underline cursor-pointer">
          I do not have account. <span>Sign up</span>
        </p>
          </Link>
       
      </div>
    </div>
  );
};

export default Login;
