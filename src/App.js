import React from 'react';
// import logo from './logo.svg';
import './app.css';
// import laptop from './laptop.jpg'



function App() {
  return (
    
    <div id="container" className="container">
        <div id="left-container">
          <h1>Login</h1>
          <p>Don't have an account? <span>Creat your account</span>, it takes less<br></br>than a minute</p>
          <input type="text" className="input_userId" placeholder="Username"></input>
          <input type="text" className="input_pw" placeholder="Password"></input>

          <div className="sub-container">
            <div><input type="checkbox" className="check_box"></input></div>
            <div className="remember_me">Remember Me</div>
            <div><a href="#" className="forgot_pw">Forgot Password?</a></div>
          </div>

          <div><button className="btn_login">LOGIN</button></div>

          <div className="bottom_container">
            <div className="login_with">Or Login With</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div id="right-container" class="wrapper">
          <img src="./laptop.jpg" alt="laptop image"></img>
        </div>
    </div>
    
  );
}

export default App;
