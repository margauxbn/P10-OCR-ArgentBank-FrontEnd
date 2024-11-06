import './userAccount.css';
import { useEffect, useState } from 'react';
import { useProfile } from '../../hooks/useProfile';
import EditNameForm from '../editNameForm/EditNameForm';

function UserAccount() {
  const { profile, firstName, lastName } = useProfile();
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    profile();
  }, [profile]);

  const toggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <>
      <div className="user-account-block">
        <h2 className="user-title">
          Welcome back<br />
          {firstName} {lastName} !
        </h2>
        <button className="btn-edit-name" onClick={toggleEditForm}>
          {showEditForm ? 'Cancel' : 'Edit name'}
        </button>
        {showEditForm && <EditNameForm setShowEditForm={setShowEditForm} />}
      </div>
    </>
  );
}

export default UserAccount;
