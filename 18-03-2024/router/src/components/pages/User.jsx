import { useState, useEffect } from "react";
import fetchData from "../fetch";

function User(){

    const [data,setdata] = useState([])
    useEffect(( )=>{
        fetchData(setdata, '/users')
    },[])
    
    return(
        <>
        <h2>Users</h2>
        <div className="UserList">
        {data.map(data => (
          <li key={data.id}>{"Name : "}{data.name}{"  Email :"} { data.email}</li>
        ))}
        </div>
      
    </>
    )
}
export default User ;