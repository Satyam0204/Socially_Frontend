import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


const Search = () => {
    var [searchbar,setsearchbar]=useState("")

    let [results, setResults]=useState([])


   
      let searchProfile = async () =>{

        let response = await fetch('/api/search',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({"profile":searchbar})
        })
        let data = await response.json() 

        setResults(data)
      }
    


 useEffect(() => {
  if(searchbar){
    searchProfile()
}

  else{
    setResults([])
  }
 }, [searchbar]);

  return (
    <div>

        <input onChange={(e)=>{setsearchbar(e.target.value)}} type="text" id="searchbar" placeholder='search' name="search"/>
        

      <div>
        {results.map((result,index)=>(
          <div key={index}>
            <Link  to={`/profile/${result.user_id}/`} >{result.username}</Link>
            </div>

        ))}
      </div>
    </div>
  )
}

export default Search
