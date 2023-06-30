import React,{} from 'react'
import { Link } from 'react-router-dom'



const Navlink = ({props,activeTab,setactiveTab}) => {

    
  return (
    <div className={activeTab==props.title?"text-white":"text-gray-500"}  onClick={()=>setactiveTab(props.title)}>
      <Link to={props.link}>
        <p className='flex justify-end m-5'>{props.title}</p>
        </Link>
    </div>
  )
}

export default Navlink
