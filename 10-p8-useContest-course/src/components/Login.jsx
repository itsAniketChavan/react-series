import React, { useState, useContext } from "react";
import {useNavigate  } from "react-router-dom"
import UserContext from "../context/UserContext";

const Login = () => {

  const navigate = useNavigate()

  const [Username, setUsername] = useState("")
  const [Pasword, setPassword] = useState("")

  const {setUser} = useContext(UserContext)

  const submitHandler = (e) =>{
    if (Username.trim() === '' || Pasword.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    e.preventDefault()
    setUser({Username, Pasword})

    navigate("/profile")
  }

  return (
    <div>
      <h1>Project - Use of useContext to pass and access the data</h1>

      <h2>Login Form</h2>

      <div>
        Username : <input 
        type="text"
         value={Username} 
      
         onChange={(e) => setUsername(e.target.value)}
         />
         <br />
        <br />
        <br />
        Pasword : <input 
        type="text" 
         
        value={Pasword}
        onChange={(e) => setPassword(e.target.value)}
        
        />
        <br />
        <br />
        
        <button onClick={submitHandler}>Submit</button>
      
         
      </div>
    </div>
  );
};

export default Login;
