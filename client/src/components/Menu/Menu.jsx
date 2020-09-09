import React from "react";
import {Link} from "react-router-dom";

import "./Menu.css";

function Menu(){
    return(
        <div className="menu">
            <Link exact to="/"><button className="btn btn-light">HOME</button></Link>
            <Link exact to="/register"><button className="btn btn-light">register</button></Link>  
            <Link exact to="/login"><button className="btn btn-light">login</button></Link>
        </div>
    );
}

export default Menu;