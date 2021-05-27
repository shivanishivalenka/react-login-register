const Login = (props) =>{
    const {handelLogin,setLemail,setLpassword,hasAccount,setHasAccount} = props;
    return(
        <div className = "from">
            <div>
                <label>Email ID</label>
                <input type = "email" 
                name = "email" 
                onChange = {(e)=> setLemail(e.target.value)}>
                </input>
            </div>
            <div>
                <label>Password</label>
                <input type = "password"
                name = "login-pwd"
                onChange = {(e)=>setLpassword(e.target.value)}></input>
            </div>
            <button onClick = {handelLogin}>Submit!</button>
            <div>
                <p>Don't have an account? <span onClick = {()=>setHasAccount(!hasAccount)}>Register!</span></p>
            </div>
        </div>
    )

}

export default Login;