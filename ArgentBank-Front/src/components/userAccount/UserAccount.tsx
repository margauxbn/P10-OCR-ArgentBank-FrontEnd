import './userAccount.css';
import { useState } from 'react';  
import EditNameForm from '../editNameForm/EditNameForm';

interface UserAccountProps {
  firstname: string;
  lastname: string;
}

function UserAccount(props: UserAccountProps) {
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm); 
  };

  return (
    <>
      <div className='user-account-block'>
        <h2 className='user-title'>
          Welcome back<br />
          {props.firstname} {props.lastname} !
        </h2>
        <button className='btn-edit-name' onClick={toggleEditForm}>
          {showEditForm ? 'Cancel' : 'Edit name'}
        </button>
        {showEditForm && <EditNameForm setShowEditForm={setShowEditForm} />} 
      </div>
    </>
  );
}

export default UserAccount;
