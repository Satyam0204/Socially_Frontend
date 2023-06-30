import React from 'react'
import {useState,useEffect, useContext } from 'react'
import PostItem from '../components/PostItem'
import Authcontext from '../Contexts/Authcontext'


const Home = () => {
  let {authTokens}=useContext(Authcontext)

  let [Posts,setPosts] = useState([])

  useEffect(() => {
    getPosts()

  }, []);

  let getPosts =async () => {
    let response = await fetch('/api/all_users_posts/',{
      method:"GET",
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + String(authTokens.access)
      }
    })
      let data = await response.json()
      console.log("Post: ",data)
      setPosts(data.reverse())

  }


  return (
    <div className='border-black border-2 m-5' >
      <div >
      <p>this is home page</p>
      </div >
      <div className=''>

      {Posts.map((post, index)=>(
        <PostItem key={index} post={post}/>
        ))}
    </div>
    </div>
  )
}

export default Home
