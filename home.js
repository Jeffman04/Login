import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.jpg'
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default function Home(){
    return(
        <div className="home">
        <nav>
        <img className="home-logo" src={logo} alt="logo"/>
      <div className="navLinks">
        <Link to='/home'>Home</Link>
        <Link to='/'>Resources</Link>
        <div className="text-white">|</div>
        <Link to='/'>Chat</Link>
        <div className="text-white">|</div>
        <Link to='/'>Profile</Link>
        <div className="text-white">|</div>
        <Link to='/'>Tasks</Link>
        <div className="text-white">|</div>
        <Link to='/'>Logout</Link>
      </div>
       </nav>
       <div className="header-text">

            Welcome <i className="text-danger"><a>USER</a> </i> to APPIC Dashboard
          </div>
    <footer class="footer">
            <div className="container">
                <div className="footerRows">
                    <div className="column">
                        <div className="logo">APPIC</div>
                         <img className="home-logo" src={logo} alt="logo"/>
                        <span id="summary">       
                            APPIC is a startup website made
                            by second year students at the 
                            University of Johannesburg. We are
                            aware of the problem that student have
                            when it comes to time management and 
                            not being able to submit their assignments
                            on time,forgeting about tests, and we want
                            fill that void.
                        </span>
                    </div>
                    <div className="column">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to='/startup'>Logout</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Extra Links</h4>
                        <ul>
                            <li><Link className="link"
                            to='/registration'>Sign Up</Link></li>
                            <li><Link className="link"
                            to="/login">Sign In</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Follow Us</h4>
                        <div className="social-media-icons-white">
                            <a href="https://www.facebook.com/profile.php?id=100085996759558"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="https://twitter.com/appic9_appic"><FontAwesomeIcon icon={faTwitter}/></a>
                            <a href="https://www.instagram.com/appic54/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a> 				
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}