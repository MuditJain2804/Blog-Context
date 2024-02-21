import React from 'react'
import Header from '../components/Header'
import Button from '@mui/material/Button'
import { useLocation, useNavigate } from 'react-router'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div className='tagPage'>
      <Header/>
      <div>
        <Button style={{marginTop:"100px", marginRight:"433px",color:"black"}} variant='outlined' color='inherit' onClick={() => navigation(-1)}>
          Back
        </Button>
        <h2>Blogs Tagged <span>#{tag}</span></h2>
      </div>
      <div className='tagPageContainer'>
      <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default TagPage