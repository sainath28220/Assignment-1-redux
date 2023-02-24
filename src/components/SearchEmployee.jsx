import { useState } from "react"



const SearchEmployee = () =>{
  const [ searchName,SetSearchName ] = useState('');


  const handleFilter = (event) => {
    SetSearchName(event.target.value)
  }


  return(
    <>
      <h1>Filter By Employee Name</h1>
      <input placeholder="Filter By Name" type='text' onChange={handleFilter} value={searchName} className='hover:bg-sky-700 mt-2'/>
    </>
  )
}

export default SearchEmployee