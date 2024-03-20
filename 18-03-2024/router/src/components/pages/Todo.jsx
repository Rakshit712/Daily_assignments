import { useState, useEffect } from "react";
import fetchData from "../fetch";

function Todo(){

    const [data,setdata] = useState([])
    useEffect(( )=>{
        fetchData(setdata, '/todos')
    },[])
    
    return(

    <div className="users">{JSON.stringify(data)}</div>
    )
}
export default Todo ;