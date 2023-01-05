import React from 'react'
import { Link } from 'react-router-dom'
import Like from './Like'


const PostItem = ({post}) => {
  
  return (
    <div style={{border:"2px solid black"}}>
      <Link to = {`/post/${post.id}/`}>{post.title}</Link>
      <p>{post.desc.slice(0,50)}</p>
      <Like post={post}/>
    </div>
  )
}

export default PostItem
