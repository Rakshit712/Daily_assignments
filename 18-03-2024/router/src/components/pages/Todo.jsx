import { useState, useEffect } from "react";
import fetchData from "../fetch";

function Todo(){

    const [data,setdata] = useState([])
    useEffect(( )=>{
        fetchData(setdata, '/todos')
    },[])
    
    return(

<>
       
       <h2>Todo</h2>
        <div className="TodoList">
        {data.map(data => (
          <li key={data.id}>{"Title : "}{data.title}</li>
        ))}
        </div>
    </>

    )
}
export default Todo ;