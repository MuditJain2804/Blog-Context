import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from '@mui/material/Button'
import BlogDetails from '../components/BlogDetails'
import { useLocation, useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'
import Spinner from '../components/Spinner'

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const {setLoading,loading} = useContext(AppContext);
  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog";
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlog(){
    setLoading(true);
    const url = `${baseUrl}?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Error");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchRelatedBlog();
  },[location.pathname])
  return (
    <div className='blogPage'>
      <div>
      <Header/>
      </div>
      <div>
        <Button style={{marginTop:"100px", marginRight:"433px",color:"black"}} variant='outlined' color='inherit' onClick={() => navigation(-1)}>Back</Button>
      </div>
      <div className='blogsPageContainer'>
      {
        loading ? (<Spinner/>) : 
        blog ? 
        (
          <div>
            <BlogDetails post={blog} />
            <h2>Related Blogs</h2>
            {
              relatedBlogs.map((post) => (
                <div>
                  <BlogDetails post={post}/>
                </div>
              ))
            }
          </div>
        ) :(
        <p>No Blog Found</p>)
      }
      </div>
      
    </div>
  )
}

export default BlogPage