import { useState, useEffect } from "react";
import fetchData from "../fetch";

function Post(){

    const [data,setdata] = useState([])
    useEffect(( )=>{
        fetchData(setdata, '/posts')
    },[])
    
    return(
    <>
       
       <h2>Posts</h2>
        <div className="PostList">
        {data.map(data => (
          <li key={data.id}>{"Title : "}{data.title}{"  Body :"} { data.body}</li>
        ))}
        </div>
    </>)
}
export default Post ;