import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export const Signup = () => {
  const [name,setname]=useState();
  const [email,setemail]=useState();
  const [password,setpassword]=useState();

  const onSubmit=async(e)=> {
    e.preventDefault()
    try{
      const sendSign = await fetch(`http://localhost:3000/user/signup`,{
        method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({name,email,password})
      })
      const response = await sendSign.json();

      if(sendSign.ok){
        alert("Registation successfull");
        Navigate("/");
        console.log(response);
      }else{
        alert("Registation failed");
      }
    }catch (error){
      console.log(error);
    }
  }

  return (
  <div>
      <div>
        <h1>Signup</h1>
      </div>
        <div>
        <input type="name" name='name' placeholder='name'onChange={(e)=> setname(e.target.value)}/>
        <br />
        <br />
        <input type="email" name='email' placeholder='email' onChange={(e)=> setemail(e.target.value)}/>
        <br />
        <br />
        <input type="password" name='password' placeholder='password'onChange={(e)=> setpassword(e.target.value)}/>
        <button onClick={onSubmit} type='submit'>Signup</button>
        </div>
        <div>
        <p>
          already a user?
          <Link to="./Login">Login</Link>
        </p>
        </div>
  </div>
  );
};
