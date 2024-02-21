import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
        <div>
            <NavLink to={`/blog/${post.id}`}>
                <p className='title'>{post.title}</p>
            </NavLink>
            <p className='author'>
            By <span className='authorName'>{post.author}</span> on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className='category'>{post.category}</span>
            </NavLink>
            </p>
            <p className='date'>Posted on {post.date}</p>
            <p className='content'>{post.content}</p>
            <div >
            {
                post.tags.map((tag,index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className='tags'>{`#${tag}`}</span>
                </NavLink>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default BlogDetails