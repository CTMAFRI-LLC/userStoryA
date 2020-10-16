import React from "react";
import ImageContainer from "./ImageContainer";
import MainForm from "./MainForm";


const SignUpForm = () => {
  return(
    <div className="container-flex">
        <div className="form-container">
          <div className="container">
          <h3>Create an Account</h3>
          <p>Already a user? <a href="/signin">Sign In</a></p> 
        </div>
        <div>
          <form>
          <MainForm/>
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

export default SignUpForm;
