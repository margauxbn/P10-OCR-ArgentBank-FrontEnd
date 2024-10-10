import './form.css';
import { Link } from 'react-router-dom';

function Form() {
  return (
    <>
     <div className='form-block'>
        <i className="fa-solid fa-circle-user"></i>
        <h2 className='title-form'>Sign In</h2>
        <form className='form-signin'>
            <div className='form-information'>
                <label htmlFor='username' className='label-form'>Username</label>
                <input type='text' id='username' name='username' className='input-form' required></input>
            </div>
            <div className='form-information'>
                <label htmlFor='password' className='label-form'>Password</label>
                <input type='password'  id='password' name='password' className='input-form' required></input>
            </div>
            <div className="form-remember">
                <input type="checkbox" id="remember-me" name="remember-me"></input>
                <label htmlFor="remember-me" className='label-remember'>Remember me</label>
            </div>
            <Link to="/user">
            <button type='submit' className='btn-form'>Sign In</button>
            </Link>
        </form>
     </div>
    </>
  )
}

export default Form