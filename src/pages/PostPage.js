import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Authcontext from '../Contexts/Authcontext'
import { useParams } from 'react-router-dom'
import Like from '../components/Like'


const PostPage = () => {
  let {authTokens}=useContext(Authcontext)
  let [post,Setpost] = useState([])
  let {id} = useParams()
  let getPost= async ()=>{
    let response = await fetch(`/api/posts/${id}/`,{
      method:"GET",
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()
    console.log(data)
    Setpost(data)
  }

  useEffect(() => {
    getPost()
  }, [id]);

  return (
    <div>
      <p>this is a post page</p>

       <div>{post.title}</div>
       <div>{post.desc}</div>
       <div>{post.datecreated}</div>
       <div>{post.like}</div>

    </div>
  )
}

export default PostPage
