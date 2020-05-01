import React from 'react';
// import logo from './logo.svg';
import './app.css';
import laptop from './laptop.jpeg'
import user from './user.jpg'
import password from './password.jpg'
import facebook from './facebook.jpg'
import twitter from './twitter.jpg'
import google from './google+.jpg'





function App() {
  return (
    
    <div id="container" className="container">
        <div id="left-container">
          <h1>Login</h1>
          <p>Don't have an account? <span>Creat your account</span>, it takes less<br></br>than a minute</p>
          <div className="text-1">
            <div className="div-user"><input type="text" className="input_userId" placeholder="Username"></input></div>
            <div><img className="img-user" src={user}></img></div>
          </div>
          
          <div className="text-1">
            <div className="div-user"><input type="text" className="input_pw" placeholder="Password"></input></div>
            <div><img className="img-pw" src={password}></img></div>
          </div>

          <div className="sub-container">
            <div><input type="checkbox" className="check_box"></input></div>
            <div className="remember_me">Remember Me</div>
            <div><a href="#" className="forgot_pw">Forgot Password?</a></div>
          </div>

          <div><button className="btn_login">LOGIN</button></div>

          <div className="bottom_container">
            <div className="login_with">Or Login With</div>
            <div><img className="img logo-fb" src={facebook}></img></div>
            <div><img className="img" src={twitter}></img></div>
            <div><img className="img" src={google}></img></div>
          </div>
        </div>

        <div id="right-container" className="wrapper">
          <img className="laptop-img" src={laptop} alt="laptop image"></img>
          <div className="overlay"></div>
          <div className="header">Welcome</div>
          <div className="content">Sed do eiusmod temporut labore et<br></br> dolore magna aliqua. Your perfect<br></br>place to buy and sell.</div>
        </div>
    </div>
    
  )
}

export default App;
