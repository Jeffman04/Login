import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "./login.css";
import logo from "./logo.jpg";

export default function Login(){

    const[email,setEmail]= useState('')
    const[password,setPassword]=useState('')


    const handleSubmit =(event)=>{
       event.preventDefault()
       console.log(email)
    }
    return(
        <div className="login">
            <form>
            <img src={logo} alt="logo"/>
                <h1>
                Login
                </h1>
                <label for="email">Email </label>
                <input  type="email" id="email" 
                placeholder="youremail@gmail.com" 
                value={email} onChange = {(e) => setEmail(e.target.value)}
                required/>
                <label for="password">Password </label>
                <input type="password" id="password"
                placeholder="*********" 
                value={password} onChange = {(e) => setPassword(e.target.value)}
                required/>

                <Link to='/home'>
                <button onClick={()=>handleSubmit()}
                 type="submit" className="btn">Signin</button>
                 </Link>
                 <h4><Link className="log-link" to='/'>forgot password</Link></h4>
                <h4>Don't have an account?<Link className="log-link"
                 to='/registration'>sign up</Link> </h4>
                <h4 className="info">or sign up with</h4>
        </form>
        </div>
    )
};