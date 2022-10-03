import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./register.css";
import logo from './logo.jpg'

  
const Register = () => { 

    const [form,setForm] = useState({ 

        fullname:'',
        email:'', 
        password:'',
        confirmpassword:'',
        date_of_birth:'',

    })
    const handleSubmit = async(e)=>{ 

        e.preventDefault();  

  

    } 
    return ( 
        <div className='register'>
        <form> 
            <img src={logo} alt="logo"/>
                <h1>
                Register
                </h1>
                <label for="email">Full Name</label> 
                <input type="text" placeholder="fullname" id="mail" 
                    onChange={(e) =>  
                    setForm({...form, fullname: e.target.value})}
                    required/>

                <label for="email">Email</label> 
                <input type="text" placeholder="email" id="mail" 
                    onChange={(e) =>  
                    setForm({...form, email: e.target.value})}
                    required/>

                <label for="password">Password</label> 
                <input type="password"  placeholder="Password" 
                    onChange={(e) =>  
                    setForm({...form, password: e.target.value})}
                    required/> 

                <label for="password">CornfirmPassword</label> 
                <input type="password"  placeholder="Password" 
                    onChange={(e) =>  
                    setForm({...form, confirmpassword: e.target.value})}
                    required/>

                <label for="dateofbirth">Date-Of-Birth</label> 
                <input type="date"  placeholder="Date-of-birth" 
                    onChange={(e) =>  
                    setForm({...form, date_of_birth: e.target.value})}
                    required/> 
                
                <Link to='/home'>
                <button onClick={()=>handleSubmit()}
                type="submit" className="btn">Signup</button>
                </Link>
                <h4>Already have an account?<Link className="log-link" to='/login' >sign in</Link></h4>
                <h4 className="info">or sign in with</h4>
        </form> 
        </div>

  

    ) 
} 
export default Register;