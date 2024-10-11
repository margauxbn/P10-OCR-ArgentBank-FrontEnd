import './editNameForm.css';

function EditNameForm() {
  return (
    <>
    <div className="change-name-form">
      <form className='edit-form'>
        <div className="form-edit-group">
          <label className='label-edit-form'>First Name</label>
          <input type="text" className='input-edit-form'/>
        </div>
        <div className="form-edit-group">
          <label className='label-edit-form'>Last Name</label>
          <input type="text" className='input-edit-form'/>
        </div>
        <div className="button-edit-group">
          <button className='button-edit-name'>Save</button>
          <button className='button-edit-name'>Cancel</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default EditNameForm
