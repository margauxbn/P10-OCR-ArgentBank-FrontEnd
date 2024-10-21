import './form.css';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import { userApi } from '../../redux/apiUser';
import { useNavigate } from 'react-router-dom';


const Form: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
        const data = await userApi.login({ email, password });
        dispatch(login(data.token)); 
        navigate('http://localhost:5173/user');
    } catch (err) {
        setError('Login failed. Please try again.');
    }
  };

  return (
    <div className='form-block'>
      <i className="fa-solid fa-circle-user"></i>
      <h2 className='title-form'>Sign In</h2>
      <form className='form-signin' onSubmit={handleSubmit}>
        <div className='form-information'>
          <label htmlFor='email' className='label-form'>E-mail</label>
          <input
            type='text'
            id='email'
            name='email'
            className='input-form'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-remember">
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me" className='label-remember'>Remember me</label>
        </div>
        <button type='submit' className='btn-form'>Sign In</button>
        {error && <p className='error-message'>{error}</p>}
      </form>
    </div>
  );
}

export default Form;
