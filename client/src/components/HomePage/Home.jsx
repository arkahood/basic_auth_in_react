import React from "react";
import "./Home.css";

function Home(props){
    return(
        <div className="jumbotron">
            <h1 className="homeh1">Hello {props.username} </h1>
        </div>
        
    );
}

export default Home;