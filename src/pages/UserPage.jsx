import React,{useContext,useState, useEffect} from 'react'
import PostItem from '../components/PostItem'
import Authcontext from '../Contexts/Authcontext'


const UserPage = () => {
    let {authTokens}=useContext(Authcontext)
    let [profile,setProfile]=useState([])
    let [Posts,setPosts] = useState([])
    let getProfile = async ()=>{
        let response = await fetch('/api/user',{
            method:"GET",
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        setProfile(data)
        console.log("profile: ",data)
    }
    let getPosts =async () => {
        let response = await fetch('/api/all_posts/',{
          method:"GET",
          headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
          }
        })
          let data = await response.json()
          console.log("Post: ",data)
          setPosts(data)
    
      }
    useEffect(() => {
        getProfile()
        getPosts()
    }, []);
  return (
    <div>
        <div>{profile.username}</div>
        <div>followers : {profile.followers}</div>
        <div>following : {profile.following}</div>

    {Posts.length?
    <div>

      {Posts.map((post, index)=>(
      <PostItem key={index} post={post}/>
      ))}
    </div>:<div>No posts yet</div>}
    </div>
  )
}

export default UserPage
