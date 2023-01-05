import React,{useContext,useState} from 'react'

import Authcontext from '../Contexts/Authcontext'


const Follow = ({profile}) => {
    let {authTokens}=useContext(Authcontext)
    let {user}=useContext(Authcontext)
    let [follows, setfollows]=useState(profile.followers_arr.includes(user.user_id)?"unfollow":"follow")



    let followprofile = async()=>{
        let response = await fetch(`/api/follow/${profile.user_id}/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+String(authTokens.access)
            }
        })
        let data = await response.json()
        console.log(data)
        setfollows("unfollow")
    }

    let unfollowprofile = async()=>{
        let response = await fetch(`/api/unfollow/${profile.user_id}/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+String(authTokens.access)
            }
        })
        let data = await response.json()
        console.log(data)
        setfollows("follow")
    }
    let handleclick= ()=>{
        if(follows==="unfollow"){
            unfollowprofile()


            
        }
        else{
            followprofile()


        }
     }


  return (
    <div>
      <button onClick={handleclick}>{follows}</button>
    </div>
  )
}

export default Follow
