import React, { useState } from 'react';
import '../../styles/SignIn_Up.css';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const PageConnection = () => {
  const [signIn, setSignIn]=useState(true);
  const [signUp,setSignUp]=useState(false);
  

  const handleSelector=(e)=>{
    e.preventDefault();
    if(e.target.id==='signUp'){
      setSignIn(false);
    setSignUp(true);
   
    }else if(e.target.id==="signIn"){
      setSignIn(true);
    setSignUp(false);
  
    }
    
  }


  return (
    <div>
      <div className="container" id="container">
      <div className="form-container sign-in-container">
        {signIn && <SignInForm/>}
        {signUp && <SignUpForm/>}

      </div>
      <div className="overlay-container">
        <div className="overlay">
       { signUp &&
         (
          <div  className="overlay-panel overlay-right">
         <h1>Welcome Back!</h1>
         <p>To keep connected with us please login with your personal info</p>
         <button onClick={handleSelector} className="ghost" id="signIn">Sign In</button>
       </div>
         )
       }
       { signIn &&
          (
            <div  className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your details and start journey with us</p>
          <button onClick={handleSelector} className="ghost" id="signUp">Sign Up</button>
          </div>
          )
       }
        </div>
      </div>
    </div>
    </div>
  );
};

export default PageConnection;