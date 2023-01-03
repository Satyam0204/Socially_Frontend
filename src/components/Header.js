import React ,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../Contexts/Authcontext'


const Header = () => {
  let {user} = useContext(Authcontext)
  let {logout}=useContext(Authcontext)
  return (
    <div>
      {user?
      <>
      <Link to="/">Home </Link>
      
      <Link  to={`/user`}>My Profile </Link>
      <span> | </span>

      <Link onClick={logout}>Logout</Link>
      </>
      :
      <>
      <Link to="/login">Login</Link>
      <span> | </span>
      <Link to="/register">Register</Link>
      </>
      }

      {user && <p>Hello, {user.username}</p>}
    </div>
  )
}

export default Header
