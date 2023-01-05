import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Follow from '../components/Follow';

import Authcontext from '../Contexts/Authcontext';

const ProfilePage = () => {
    let {authTokens}=useContext(Authcontext)
    let {id} = useParams()

    let [profile,setProfile]=useState([])

    let userProfile = async ()=>{
      let response = await fetch(`/api/profile/${id}`,{
          method:"GET",
          headers:{
              'Content-Type':'application/json',
          }
      })
      let data = await response.json()
      setProfile(data)
      console.log("profile: ",data)
  }
  useEffect(() => {
    userProfile()
    
  }, []);

  return (
<div>
        <div>{profile.username}
        <span> | </span>
        <Follow profile={profile} />
        </div>

        <div>followers : {profile.followers}</div>
        <div>following : {profile.following}</div>

</div>
  )
}

export default ProfilePage
