import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
  const {posts, loading} = useContext(AppContext);
  return (
    <div className='App'>
        <div className='blogsContainer'>
      {
        loading ? (<Spinner/>) :
          posts.length === 0 ? (<div><p>No Post Found</p></div>) : (posts.map((post) => (
            <BlogDetails key={post.id} post={post}/>
          ) )) 
      }
    </div>
    </div>
    
  )
}

export default Blogs