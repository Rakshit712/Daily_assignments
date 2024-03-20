import { useState, useEffect } from "react";
import fetchData from "../fetch";

function Post(){

    const [data,setdata] = useState([])
    useEffect(( )=>{
        fetchData(setdata, '/posts')
    },[])
    
    return(
    
       
    <div className="users">{JSON.stringify(data)}</div>
    )
}
export default Post ;