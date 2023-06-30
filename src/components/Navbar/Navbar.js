import React,{useState,useEffect} from 'react'
import Navlink from './Navlink'


const Navbar = () => {
    const [activeTab, setactiveTab] = useState("Home");
    useEffect(() => {
        
    }, [activeTab]);
  return (
    <div className='bg-[#362d54]'>
        <ul>
            <li>
                <Navlink props={{title:"Home",link:"/"}} activeTab={activeTab} setactiveTab={setactiveTab} />
            </li>
            <li>
                <Navlink props={{title:"Chat",link:"/Chat"}} activeTab={activeTab} setactiveTab={setactiveTab} />
            </li>
            <li>
                <Navlink props={{title:"Post",link:"/Post"}} activeTab={activeTab} setactiveTab={setactiveTab} />
            </li>
            <li>
                <Navlink props={{title:"Profile",link:"/user"}}activeTab={activeTab} setactiveTab={setactiveTab}  />
            </li>
            
        </ul>

    </div>
  )
}

export default Navbar
