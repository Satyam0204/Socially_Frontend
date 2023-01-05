import React,{useState, useContext} from 'react'
import Authcontext from '../Contexts/Authcontext'



const Like = ({post}) => {
    let {authTokens}=useContext(Authcontext)
    let {user} = useContext(Authcontext);
    let [likes, setLikes]=useState(post.like.includes(user.user_id)? "unlike":"like")
    
    
    let likePost = async ()=>{


        let response =await fetch(`/api/like/${post.id}/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'AUthorization':'Bearer '+String(authTokens.access)
            }
        })
        let data = await response.json()

        setLikes("unlike")

    }
    let unlikePost = async ()=>{


        let response =await fetch(`/api/unlike/${post.id}/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'AUthorization':'Bearer '+String(authTokens.access)
            }
        })
        let data = await response.json()

        setLikes("like")

    }

     let handleclick= ()=>{
        if(likes==="unlike"){
            unlikePost()


            
        }
        else{
            likePost()


        }
     }



  return (
    <div>
        <button onClick={handleclick}>{likes}</button>
 
    </div>
  )
}

export default Like
