import {useState} from 'react';

const Register = (props) =>{
    const {hasAccount, setHasAccount} = props;
    const [remail,setRemail] = useState('');
    const [rpassword,setRpassword] = useState('');
    const [uname,setUname] = useState('')

    const handelRegister = () =>{
        console.log('successfully registered baby!')
    }

    return (
        <div className = "form">
            <div>
                <label>Username</label>
                <input type = "text" 
                name = "username" 
                onChange = {(e)=> setUname(e.target.value)}>
                </input>
            </div>
            <div>
                <label>Email ID</label>
                <input type = "email" 
                name = "email" 
                onChange = {(e)=> setRemail(e.target.value)}>
                </input>
            </div>
            <div>
                <label>Password</label>
                <input type = "password"
                name = "login-pwd"
                onChange = {(e)=>setRpassword(e.target.value)}></input>
            </div>
            <button onClick = {handelRegister}>Submit!</button>
            <div>
                <p>Already have an Account? <span onClick = {()=>setHasAccount(!hasAccount)}>Login</span></p>
            </div>
        </div>

    )
}

export default Register;