import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({post}) => {
  return (
    <div style={{border:"2px solid black"}}>
      <Link to = {`/post/${post.id}/`}>{post.title}</Link>
      <p>{post.desc.slice(0,50)}</p>
    </div>
  )
}

export default PostItem
