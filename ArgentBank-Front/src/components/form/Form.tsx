import './form.css';
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLogin } from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Form: React.FC = () => {
  const { login, hasError } = useLogin(); 
  const token = useSelector((state: RootState) => state.user.token);
  
  const [userInputs, setUserInputs] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  
  const [submitError, setSubmitError] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token.length > 0) {
      navigate('/user');
    }
  }, [token, navigate]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputName = event.target.id;
    setUserInputs({
      ...userInputs,
      [inputName]: event.target.value,
    });
    setSubmitError(false); 
  };

  const handleLoginFormSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
  
    try {
      await login(userInputs.email, userInputs.password);
      
      setUserInputs({
        email: "",
        password: "",
      });
      setSubmitError(false);
    } catch (error) {
      console.error(error);
      
      setSubmitError(true);
    }
  };

  return (
    <div className='form-block'>
      <i className="fa-solid fa-circle-user"></i>
      <h2 className='title-form'>Sign In</h2>
      <form className='form-signin' onSubmit={handleLoginFormSubmit}>
        <div className='form-information'>
          <label htmlFor='email' className='label-form'>E-mail</label>
          <input
            type='text'
            id='email'
            name='email'
            className='input-form'
            required
            value={userInputs.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-information'>
          <label htmlFor='password' className='label-form'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            className='input-form'
            required
            value={userInputs.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-remember">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me" className='label-remember'>Remember me</label>
        </div>
        <button type='submit' className='btn-form'>Sign In</button>
        {(submitError || hasError) && (
          <p className='error-message'>Incorrect credentials.<br/>Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default Form;
