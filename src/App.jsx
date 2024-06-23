import { useState } from 'react'
import './App.css'
function App() {
  const data = { name:'',email:'',password:''}
  const [input, Setinput]= useState(data);
   const[flag, Setflag]= useState(false)
  const handleChange = (e) =>{
    Setinput({...input, [e.target.name]:e.target.value})}
  console.log(input)
  const handleSubmit = (e) =>{
  e.preventDefault();
  if ( !input.name || !input.email || !input.password){
    alert ("All feilds are manadatory")
  }
  else{
  Setflag(true)
  }
  }

  return (
    <>

  <form onSubmit={handleSubmit}>
  <div className='background'>
  <pre>{flag?(<div className='register'><h2>Hi, {input.name} you've successfully registered</h2></div>):('')}</pre>
      <div className='container'>
        <div className='head'>
          <h2>Registration form</h2>
        </div>
        <div className='input'>
          <label>Username</label>
          <input type='text' placeholder='Enter Your name...' name='name' value={input.name} onChange={handleChange}/>
        </div>
        <div className='input'>
          <label>Email</label>
          <input type='Email' placeholder='Enter Your email...' name='email' value={input.email} onChange={handleChange}/>
        </div>
        <div className='input'>
          <label>Password</label>
          <input type='password' placeholder='Enter Your password...' name='password' value={input.password} onChange={handleChange}/>
        </div>
        <div className='btn'><button>Submit</button></div>
      </div>

    </div>
  </form>
    </>
  )

}
export default App;

