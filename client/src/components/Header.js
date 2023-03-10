import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"
function Header(props){
    console.log(props)
    return(
        <div className="navbar">
            <Link className="site-name" to="/"><h1>FILTR</h1></Link>
            <div className="nav-items">
                <Link className="nav-btn" to="/add-blog">Add Blog</Link>
                <Link className="nav-btn" to="/bio">Bio</Link>
                <Link className="nav-btn" to="/contact">Contact Us</Link>
            </div>
          
        </div>
    )
}
export default Header
