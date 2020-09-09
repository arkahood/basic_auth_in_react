import React,{useState} from "react";
import "./Login.css";

function Login(props){
    var [input,setinput] = useState({
        name :"",
        pass : ""
    });
    function updateLogin(event){
        const eventName = event.target.name;
        const changes = event.target.value;
        return(
            setinput((prev)=>{
                if(eventName === "username"){
                    return({...prev ,name:changes});
                }else{
                    return({...prev,pass:changes});
                }
            })
        );
        
    }
    return(
        <div className="jumbotron Login">
            <h1 className="loginh1">Login</h1>
            <form>
                <div className="input-box">
                    <input type="text" onChange={updateLogin} className="form-control" name="username" placeholder="Username" value={input.name}/>
                </div>
                <div className="input-box">
                    <input type="password" onChange={updateLogin} className="form-control" name="password" placeholder="Password" value={input.pass}/>
                </div>

                <button type="button" onClick={(event)=>{
                    props.updateLogin(input)
                    setinput({name:"",pass:""});
                    event.preventDefault();
                }} class="btn btn-light">Log In</button>
            </form>
        </div>
    );
}

export default Login;