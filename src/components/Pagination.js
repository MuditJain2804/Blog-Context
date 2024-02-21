import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Button from '@mui/material/Button';

const Pagination = () => {
  const {page,totalPages, handlePageChange} = useContext(AppContext);
  return (
    <div className='App'>
        <div className='pagination'>
    <div style={{display:"flex", justifyContent:"space-between", width:"500px"}}>
      <div className='btnContainer'>
          {
            page > 1 && 
              (<Button variant='contained' style={{backgroundColor:"white", color:"black"}} onClick={() => handlePageChange(page-1)}>Previous</Button>) 

          }
          {
            page < totalPages &&
            (<Button variant='contained' style={{backgroundColor:"white", color:"black"}} onClick={() => handlePageChange(page+1)}>Next</Button>)
          }
        </div>
          <p className='page'>Page {page} of {totalPages}</p>
    </div>
    </div>
    </div>
    
  )
}

export default Pagination