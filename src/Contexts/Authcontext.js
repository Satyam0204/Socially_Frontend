import jwtDecode from "jwt-decode";
import { createContext,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Authcontext= createContext()

export default Authcontext;

export const AuthProvider = ({children}) => {

    const navigate = useNavigate()

    let [authTokens, setAuthTokens] =useState(()=>localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):null)
    let [user,setUser]=useState(()=>localStorage.getItem('token')?jwtDecode(localStorage.getItem('token')):null)
    let [loading, setLoading]=useState(true)


    let loginUser= async (e) => {
        e.preventDefault()

        let response = await fetch('/api/login',{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
        })
        let data = await response.json()
        if(response.status===200){

            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('token',JSON.stringify(data))
            navigate('/')
        }
        else{
            console.log('something went wrong')
        }
    }

    let updateToken = async () => {

        if(loading){
            setLoading(false)
            if(!authTokens){
                return
            }
            
        }

        let response = await fetch("/api/token/refresh/",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens.refresh})
        })
        let data= await response.json()
        if(response.status===200){
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('token', JSON.stringify(data))

        }
        else{
            logout()
        }

    }

    let RegisterUser = async (e)=>{
        try {
            
        
        e.preventDefault()
        let response = await fetch("/api/register/",{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({"username":e.target.username.value,"email":e.target.email.value,"password":e.target.password.value})
        })
        let data = await response.json()
        if(response.status===200){
            console.log(data)
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('token',JSON.stringify(data))
            navigate('/')
        }

        } catch (error) {
            console.log(error)
        }

    }

    let logout=() => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('token')
        navigate('/login')
    }


    useEffect(() => {

        if(loading){
            updateToken()
        }

        let fourminutes =4*60*1000
        let interval=setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        },fourminutes)
        return ()=> clearInterval(interval)
        
    }, [loading, authTokens]);
    

    let contextData={
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logout:logout,
        RegisterUser:RegisterUser
    }

    return(
         <Authcontext.Provider value={contextData}>
            {loading ? null:children}
         </Authcontext.Provider>

    )
}