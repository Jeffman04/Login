import React from "react";
import {Link} from 'react-router-dom';
import './startup.css';
import picture from './pic.jpeg'

const Startup = () =>{
     const handleClick =(e) =>{
        e.preventDefault()
     }
     const handleSubmit = (e) =>{
        e.preventDefault()
     }
    return(
       <div className="start">
           
           <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                 
                <h1>
                Appic
            </h1>
            <p>
                A thoughtful app made for students which
                integrate a diary with your school work.
                Appic makes a student life easier by
                helping them manage their work in time
                and also remind them on whatever tasks
                they choose to be reminded on like 
                tests, projects, assignments etc.
            </p>
                <Link to='/registration'>
                    <button className="log-btn" onClick={()=>handleClick()} type="submit">Join now</button>
                </Link>
                <Link to='/login'>
                    <button className="log-btn" onClick={()=>handleSubmit()} type="submit">Log in</button>
                </Link>
            
        
                </div>
            </div>
           </div>
            <div className="panel left-panel">
                <div className="content">
                <img className="picture" src={picture} alt="pic"/>
                </div>
            </div>
       </div>
    )
}
export default Startup;
