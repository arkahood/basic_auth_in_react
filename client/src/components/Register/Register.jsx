import React, { useState } from "react";
import "./Register.css";

function Register(props){
    var [input,setinput] = useState({
        name :"",
        pass : ""
    });
    function update(event){
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
        <div className="jumbotron Register">
            <h1 className="Register">Register</h1>
            <form>
            <div className="input-box">
                <input type="text" onChange={update} className="form-control" name="username" placeholder="Username" value={input.name}/>
            </div>
            <div className="input-box">
                <input type="password" onChange={update} className="form-control" name="password" placeholder="Password" value={input.pass}/>
            </div>
            <button type="submit" onClick={(event)=>{
                props.registerBtn(input);
                setinput({name:"",pass:""});
                event.preventDefault();
                }} class="btn btn-light">Register</button>
            </form>
            
        </div>
        
    );
}

export default Register;