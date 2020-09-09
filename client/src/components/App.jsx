import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
// import Home from "./HomePage/Home";
import Menu from "./Menu/Menu";
import {Route,Switch} from "react-router-dom";

function App(){
    function registerFunc(input){
        console.log(input);
    }
    function updateLogin(input){
        console.log(input);
    }
    return(
       <div>
           <Menu/>
           <Switch>
               <Route exact path="/register" render={()=><Register registerBtn={registerFunc}/>}/>
               <Route exact path="/login" render={()=><Login updateLogin={updateLogin}/>}/>
               {/* <Route exact path="/home" render={()=>{return <Home username="arka"/>}}/> */}
           </Switch>   
       </div> 
        
    );
}
export default App;
