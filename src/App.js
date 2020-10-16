import React from "react";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div>
      <Navbar/>
      <SignUpForm/>
      <Footer/>
    </div>
  );
}

export default App;
