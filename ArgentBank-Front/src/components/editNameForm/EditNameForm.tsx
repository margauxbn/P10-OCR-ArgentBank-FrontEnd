import './editNameForm.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store'; 
import { useEditName } from '../../hooks/useEditName'; 
import { setUserProfile } from '../../redux/reducer'; 

interface EditNameFormProps {
  setShowEditForm: React.Dispatch<React.SetStateAction<boolean>>; 
}

function EditNameForm({ setShowEditForm }: EditNameFormProps) { 
  const dispatch = useDispatch(); 
  const { editName, hasError } = useEditName();
  
  const firstName = useSelector((state: RootState) => state.user.firstName);
  const lastName = useSelector((state: RootState) => state.user.lastName);
  const userName = useSelector((state: RootState) => state.user.userName); 

  const [username, setUsername] = useState(userName);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await editName(firstName, lastName, username);
    
    if (!hasError) {
      console.log("Username updated successfully");
      dispatch(setUserProfile({ firstName, lastName, userName: username })); 
      setShowEditForm(false); 
    } else {
      alert("There was an error updating the username");
    }
  };

  return (
    <div className="change-name-form">
      <form className='edit-form' onSubmit={handleSubmit}>
        <div className="form-edit-group">
          <label className='label-edit-form'>Username</label>
          <input
            type="text"
            className='input-edit-form-username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-edit-group">
          <label className='label-edit-form'>First Name</label>
          <input
            type="text"
            className='input-edit-form'
            value={firstName}
            readOnly 
          />
        </div>
        <div className="form-edit-group">
          <label className='label-edit-form'>Last Name</label>
          <input
            type="text"
            className='input-edit-form'
            value={lastName}
            readOnly
          />
        </div>
        <div className="button-edit-group">
          <button type="submit" className='button-edit-name'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditNameForm;
