import './userAccount.css';
import EditNameForm from '../editNameForm/EditNameForm';

interface UserAccountProps {
  firstname: string;
  lastname: string;
}

function UserAccount(props:UserAccountProps) {
  return (
    <>
       <div className='user-account-block'>
            <h2 className='user-title'>Welcome back<br/>{props.firstname} {props.lastname} !</h2>
            <button className='btn-edit-name'>Edit name</button>
            <EditNameForm />
       </div>
    </>
  )
}

export default UserAccount
