import React from 'react'
import { useContext } from 'react'
import Authcontext from '../Contexts/Authcontext'

const Register = () => {

  let {RegisterUser} = useContext(Authcontext)

  return (
    <div>
      <form onSubmit={RegisterUser} >
        <input type="text" placeholder='username' name='username' autoComplete='username'/>
        <input type="email" placeholder='email' name='email'/>
        <input type="password" placeholder='password' name='password' autoComplete='current-password'/> 
        <input type="submit" value="submit" /> 
      </form>
    </div>
  )
}

export default Register
