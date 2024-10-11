import './userAccount.css';
import EditNameForm from '../editNameForm/EditNameForm';

function UserAccount() {
  return (
    <>
       <div className='user-account-block'>
            <h2 className='user-title'>Welcome back<br/>Tony Jarvis !</h2>
            <button className='btn-edit-name'>Edit name</button>
            <EditNameForm />
       </div>
    </>
  )
}

export default UserAccount
