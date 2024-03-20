import { useState, useEffect } from "react";
import fetchData from "../fetch";

function User(){

    const [data,setdata] = useState([])
    useEffect(( )=>{
        fetchData(setdata, '/users')
    },[])
    
    return(

    <div className="users">{JSON.stringify(data)}</div>
    )
}
export default User ;