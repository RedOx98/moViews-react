import "./register.scss";
import { useRef } from "react"; 
import { useState } from "react"; 

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };

  return (
    <div className="register">
      <div className="top">
      <div className="wrapper">
          <img className="logo" src="https://th.bing.com/th/id/R.34c020bb6536e1e72380e9614ff67eb1?rik=V6%2f6ekNByQ2EEQ&pid=ImgRaw&r=0" alt=""/>
          <button className="loginButton">Sign In</button>
      </div>
      </div>
      <div className="container">
          <h1>Unlimited Movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime</h2>
          <p>Ready to watch? Enter your email to create or restart your membership </p>{
              !email ? (
                <div className="input">
              <input  type="email" placeholder="email address" ref={emailRef}/>
              <button className="registerButton" onClick={handleStart}>Get Started</button>
          </div>
              ) : (
                <form className="input">
              <input  type="password" placeholder="password" ref={passwordRef}/>
              <button className="registerButton" onClick={handleFinish}>Start Membership</button>
          </form>
              )
          }
          
      </div>
      

    </div>
  )
}
