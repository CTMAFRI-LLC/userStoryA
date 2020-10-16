import React from "react";
import { Link } from "react-router-dom";
import ImageContainer from "./ImageContainer";

const SignInForm = () => {
  return(
    <div className="container-flex">
        <div className="form-container">
        <div class="container">
        <h3>Sign In</h3>
        <p>New user? <Link to="/">Create an Account</Link></p> 
      </div>
        <div>
            <form class="form-two">
            <input type="email" placeholder="Email Address"/>
            <input type="password" placeholder="Password"/>
            <label class="container">Keep me signed in
            <input type="checkbox"  checked=""/>
            <span class="checkmark"></span>
            </label>
            <input type="submit" value="SIGN IN"/>
           </form>
           <div className="display-bottom">
            <div className="line-one"></div><div className="text">Or Sign In With</div><div className="line-two"></div>
          </div>
          <button className="google">GOOGLE</button>
          <button className="facebook">FACEBOOK</button>
        </div>
      </div>
      <ImageContainer/>
    </div>
  );
}

export default SignInForm;