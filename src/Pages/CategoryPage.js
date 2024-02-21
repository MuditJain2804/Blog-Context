import React from 'react'
import Header from '../components/Header'
import Button from '@mui/material/Button'
import { useLocation, useNavigate } from 'react-router'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div className='categoryPage'>
      <Header/>
      <div>
        <Button style={{marginTop:"100px", marginRight:"433px",color:"black"}} variant='outlined' color='inherit' onClick={() => navigate(-1)}>
          Back
        </Button>
        <h2>Blogs on <span>#{category}</span></h2>
      </div>
      <div className='categoryPageContainer'>
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CategoryPage