import React from "react";
import {bubble as Menu, right} from 'react-burger-menu'
import "./Hamburger.css";
import Icon from 'react-icons-kit';
import { home, clock2, user, search } from 'react-icons-kit/icomoon';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';

const Hamburger = props => {
    // const showSettings = (event) => {
    //     event.preventDefault();
    // }
    return (
<Menu right>
    <div className="Grid">
    <div className="row">
         <Col xs={6}>
         {/* logo will go here */}
		     </Col> 
             <Col xs={6}>
            <nav className="nav">
            <hr />
            <Icon icon={home}/>   <a id="home" className="menu-item" href="/" >Home  </a>    
            <hr/>
            <Icon icon={user}/>   <a id="about" className="menu-item" href="/nana/:id">My Profile</a>
            <hr/>
            <Icon icon={clock2}/>   <a id="contact" className="menu-item" href= "/schedule" >My Schedule</a>
            <hr/> 
            <Icon icon={search}/>   <a id="contact" className="menu-item" href= "/nanas" >Browse</a>
            <hr/> 
           {/* <a onClick={showSettings} className="menu-item--small" href="">Settings</a> */}
           </nav>
           </Col>
         
     </div>
    </div>
    </Menu >
    );
}
export default Hamburger;