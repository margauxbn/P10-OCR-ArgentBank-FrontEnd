import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './form.css';
import { login } from "../../redux/userSlice";

interface Credentials {
  username: string;
  password: string;
}

const Form: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch(); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      login({
        username,
        password,
        loggedIn: true,
      } as Credentials) 
    );
  };

  return (
    <div className='form-block'>
      <i className="fa-solid fa-circle-user"></i>
      <h2 className='title-form'>Sign In</h2>
      <form className='form-signin' onSubmit={handleSubmit}>
        <div className='form-information'>
          <label htmlFor='username' className='label-form'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            className='input-form'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
      </form>
    </div>
  );
}

export default Form;
