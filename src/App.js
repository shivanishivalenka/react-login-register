import './App.css';
import { useEffect, useState } from 'react';
import Login from './Login';
import Register from './Register';
function App() {
  const [param,setParam] = useState('');
  const [lemail,setLemail] = useState('');
  const [lpassword,setLpassword] = useState('');
  const [hasAccount,setHasAccount] = useState(true);
  useEffect(()=>{
    fetch("http://localhost:3000/")
    .then(response => response.text())
    .then(data => setParam(data))
  })

  const handelLogin = () =>{
    fetch('http://localhost:3000/login', {
      method : 'post',
      headers : {'Content-type':'application/json'},
      body : JSON.stringify({
        email : lemail,
        password : lpassword
      })
    })
    .then(response => response.text())
    .then(console.log)
    

  }
  return (
    <div className = "container">
      <h1>Backend practice babyyy!!</h1>
      <h2>{param}</h2>
      {(hasAccount)?(
        <>
        <Login
        // lemail = {lemail}
        // lpassword = {lpassword}
        setLemail = {setLemail}
        setLpassword = {setLpassword}
        handelLogin = {handelLogin}
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}
         />
         </>

      ):(
        <>
        <Register 
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}/>
        </>
      )}
      
    </div>
  );
}

export default App;
