import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { editEmployee } from '../store'


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
    <Button onClick={() => handleDelete(emp)}>Delete</Button>
    <Button onClick={() => manageEdit()}>Edit</Button>
  </>
  }else{
    return<>
    <input value={editCode} onChange={event=>setEditCode(event.target.value)}/>
    <input value={editName} onChange={event=>setEditName(event.target.value)}/>
    <input value={editDepartment} onChange={(event)=> setEditDepartment(event.target.value)}/>
    <Button onClick={handleSave}>Save</Button>
    </>
  }
}

export default EditEmployee;