import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { editEmployee } from '../store'
import { removeEmployee } from '../store'


const EditEmployee = (props) => {
  const [ edit,setEdit ] = useState(false);
  const [ editId,setEditId ] = useState(-1);
  const dispatch = useDispatch();
  const [ editName,setEditName ] = useState(props.emp.name);
  const [ editCode,setEditCode ] = useState(props.emp.code);
  const [ editDepartment,setEditDepartment ] = useState(props.emp.department);

  const handleDelete = (emploee) => {
    dispatch(removeEmployee(emploee));
  }
  const manageEdit = () =>{
    setEdit(true)
    setEditId(props.emp.id)
  }

  const handleSave = () => {
    dispatch(editEmployee({ 'name':editName,'code':editCode,'department':editDepartment,'id':props.emp.id }));
    setEditId(-1);
    setEdit(false);
  }
  if(editId !== props.emp.id){
  return<>
    <h2>{props.emp.code}</h2>
    <h2>{props.emp.name}</h2>
    <h2>{props.emp.department}</h2>
    <Button onClick={() => handleDelete(props.emp)}>Delete</Button>
    <Button onClick={() => manageEdit()}>Edit</Button>
  </>
  }else{
    return<>
    <div>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor='code'>Employee Code:</label>
          <input value={editCode} type='text' name='code' id='code' placeholder='Enter Employee Code' onChange={(event) => setEditCode(event.target.value)} required/><hr/>
        </div>
        <div>
          <label htmlFor='name'>Employee Name:</label>
          <input value={editName} type='text'name='name' id='name' placeholder='Enter Your Name' onChange={(event) => setEditName(event.target.value)} required/><hr/>
        </div>
        <div>
          <label htmlFor='department'>Department: </label>
          <select onChange={(event) => setEditDepartment(event.target.value)} id='department' required>
              <option>select something</option>
              <option value='Development'>Development</option>
              <option value='Testing'>Testing</option>
              <option value='Human Resource'>Human Resource</option>
            </select><hr/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  }
}

export default EditEmployee;