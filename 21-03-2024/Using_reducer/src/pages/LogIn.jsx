import React, { useState } from 'react'

function LogIn() {

  const [email,setEmail]= useState("");
  const [password, setPassword] = useState("")
  

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!email || !password){
            alert("please enter all required feilds")
        }
        const userData = JSON.parse(localStorage.getItem('userData')); 
        const user = userData.find(user => user.email === email && user.password=== password);
        
        if(user){
          alert("Logged in Successfully");
         
        

        }else{
          alert("Invalid Email or Password")
        }
      
    }

   
  return (
    <>

    
    <div className='main'>
    <h1>Login Page</h1>
        <div className='inBox'>
            <label>Enter your Email</label>
            <input 
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='input' 
            required
            type="text"
             />
             <label>Enter your Password</label>
             <input
             placeholder='password'
             value={password}
             onChange={e=>setPassword(e.target.value)}
             className='input'
             required
             type="password"
             ></input>

<button  className='button2' onClick={handleSubmit}>Submit</button>
</div>
    
    </div>
    
    
    </>
  )
}

export default LogIn