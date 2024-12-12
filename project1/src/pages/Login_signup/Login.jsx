import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import style from "./Login.module.css";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email,setemail]=useState();
  const [password,setpassword]=useState();
  const Navigater = useNavigate();

const onSubmit=async(e)=> {
  e.preventDefault()
  try{
    const sendSign = await fetch(`http://localhost:3000/user/log`,{
    method:"POST",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify({email,password})
    })
    const response = await sendSign.json();

    if(sendSign.ok){
      alert("Login successfull");
      Navigate("/Home")
      localStorage.setItem("token",response.token);
      // console.log(response);
    }else{
      alert("user doesnot exist");
    }
  }catch(error){
    console.log(error);
  }
}

  return (
    <div className={style.in}>
        <div>
            <h1>login</h1>
            <br />
            <br />
            <div className={style.in2}>
                <input type="email" name='email' placeholder='email' onChange={(e)=> setemail(e.target.value)}/>
                <br />
                <br />
                <input type="password" name='password' placeholder='password'onChange={(e)=> setpassword(e.target.value)} />
                <br />
                <br />
                <button onClick={onSubmit} className={style.button}>submit</button>
            </div>
            <div>
                <p id='para'>
                  dont have an account?
                  <Link to="/Signup">Signup</Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default Login