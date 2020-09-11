import React, { useState, useEffect } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Home from "./HomePage/Home";
import Menu from "./Menu/Menu";
import {Route,Switch, Redirect} from "react-router-dom";
const qs = require("qs");

function App(){
    const [authen,setAuthen] = useState(false);
    useEffect(()=>{
      const store = JSON.parse(localStorage.getItem("login"));
        if(store && store.login){
          setAuthen(authen=>true);
        }
    },[setAuthen])
    function registerFunc(input){
        console.log(input);
        fetch("http://localhost:9000/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify(input)
        })
    }
    
    function updateLogin(input){
        console.log(input);
        fetch("http://localhost:9000/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: qs.stringify(input)
        }).then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setAuthen(authen=>data.login);
          localStorage.setItem("login",JSON.stringify(data));
          
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        
    }
    return(
      
      
       <div>
          {(!authen)? <Menu/>:<Home/>}
          <Switch>
              <Route exact path="/register" render={()=><Register registerBtn={registerFunc}/>}/>
              <Route exact path="/login">
                {(authen)?<Redirect to="/"/>:<Login updateLogin={updateLogin}/>}  
              </Route> 
           </Switch>
            
       </div> 
       
       
        
    );
}
export default App;
