import React from 'react'
import { useContext } from 'react'
import Authcontext from '../Contexts/Authcontext'


const Login = () => {
  let {loginUser}=useContext(Authcontext)

  return (

    <div>
      <form onSubmit={loginUser}>
        <input type="text" placeholder='username' name='username' autoComplete='username'/> 
        <input type="password" placeholder='password' name='password' autoComplete='current-password'/> 
        <input type="submit" value="submit" /> 
      </form>
    </div>
  )
}

export default Login
