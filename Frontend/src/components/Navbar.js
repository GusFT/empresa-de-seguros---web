import "./Navbar.css";
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";


class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarItems">
                <ul className="navbar-logo">
                    <li>
                        <Link className="navbar-logo" to="/">Argus security</Link>    
                    </li>
                </ul>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 
                    "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ?
                "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                       return(
                        <li key={index}>
                            <Link className={item.cName}
                            to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                       ); 
                    })}
                <Link id="butlog" to="/login">Login</Link>
                </ul> 
            </nav>
        );        
    }
}

export default Navbar;

