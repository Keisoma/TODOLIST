import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component{

    render() {
        return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" >Kris Amiot</a>
            <a className="navbar-brand" >To Do List App</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        </li>

                        <li className="nav-item">
                            <Link to="/Facebook" className="nav-link">Facebook</Link> 
                        </li> 

                        <li className="nav-item">
                            <Link to="/Twitter" className="nav-link">Twitter</Link>
                        </li> 
                        
                        <li className="nav-item">
                            <Link to="/Linkedin" className="nav-link">Linkedin</Link>
                        </li> 

                 
                 
                    </ul>
                </div>
            </div>
        </nav>
    }
}
