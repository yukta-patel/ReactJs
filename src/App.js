import React from 'react';
// import logo from './logo.svg';
import './app.css';
import laptop from './laptop.jpeg'
import user from './user.jpg'
import password from './password.jpg'
import facebook from './facebook.jpg'
import twitter from './twitter.jpg'
import google from './google+.jpg'


    const App=() => {
      return(
      <div className="container">
         <div className="left-container">
           <h1 className="heading">Login</h1>
           <p className="content-p">Don't have an account? <span>Creat your account</span>, it takes less<br></br>than a minute</p>
           <form>
             <div className="text-1">
               <div className="div-user"><input type="text" className="input-userId" name="UserName" placeholder="Username"></input></div>
               <div><img className="img-user" src={user}></img></div>
            </div>
            
             <div className="text-1">
               <div className="div-user"><input type="text" className="input-pw" name="Password" placeholder="Password"></input></div>
               <div><img className="img-pw" src={password}></img></div>
             </div>


             <div className="sub-container">
               <input type="checkbox" className="check-box" name="checkBox"></input>
               <div className="remember-me">Remember Me</div>
               <a href="#" className="forgot-pw">Forgot Password?</a>
             </div>

             <div><button className="btn-login">LOGIN</button></div>

       

             <div className="bottom-container">
               <div className="login-with">Or Login With</div>
               <img className="img-size logo-fb" src={facebook}></img>
               <img className="img-size" src={twitter}></img>
               <img className="img-size" src={google}></img>
             </div>
         </form>

         </div>


         <div className="right-container wrapper">
           <img className="laptop-img" src={laptop} alt="laptop image"></img>
           <div className="overlay"></div>
           <div className="header">Welcome</div>
           <div className="content">Sed do eiusmod temporut labore et<br></br> dolore magna aliqua. Your perfect<br></br>place to buy and sell.</div>
         </div>
     </div>
    )
    }
  

export default App;
