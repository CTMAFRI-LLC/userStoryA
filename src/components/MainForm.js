import React, { useState } from 'react'


const defaultResponse = {data:null, loading: false, error:null}


// MainForm Component
const MainForm = () => {
  // setting state and changing state
  const [state, setState] = useState(signUpConfig.defaultState);
  const [response, setResponse] = useState(defaultResponse);
  
  // function to change the input
  const handleChange = (name, value) => setState((s) => ({...s, [name]: value}));
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // set loading
    setResponse(s => ({...s, loading:true}))

    // send data to server
    const res = await fetch(signUpConfig.network.url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(state)
    });
    
    const data = {}

    // checking for failure 
    if(!res.ok) data.error = {msg: res.statusText, ext: await res.json()}
    if(res.ok) data.data = await res.json()
    

    setResponse(s  => ({...s, ...data, loading:false}))

    
  }
  
  // @TODO

  return(
    <div>
      <form onSubmit={handleSubmit}>
      {signUpConfig.fields.map((field, key)  => (
        <input 
        key={key}
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        value={state[field.name]}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      ))}
      <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}


export default MainForm;

// signup config 
const signUpConfig = {
  fields: [
    { name: "username", type: "text", placeholder: "Username" },
    { name: "email", type: "email", placeholder: "Email Address" },
    { name: "password1", type: "password", placeholder: "Password" },
    { name: "password2", type: "password", placeholder: "Confirm Password" },
  ],
  defaultState: {username: "", email: "", password1: "", password2: ""},
  network: { url: "https://ctmafri.herokuapp.com/api/auth/registration/" },
};


