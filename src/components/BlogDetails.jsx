import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div >
      <NavLink to={`/blog/${post.id}`} >
        <span className="font-bold text-sm">{post.title}</span>
      </NavLink>
      <p className="text-[12px]">
        By
        <span className="italic ">{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className="underline font-bold">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[12px] mt-[3px]"> Posted on {post.date} </p>
      <p className="text-[12px] mt-[10px] mb-[5px]"> {post.content}</p>
      <div className="flex gap-x-2">
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className="text-blue-700 font-bold underline text-[10px]">{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
