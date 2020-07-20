import React, { Component } from 'react'

export class NavBar1 extends Component {
    render() {
        return (
            <div style={{marginTop:"0px"}}>
                <nav className="navbar navbar-expand-lg Nav">
                    <a className="eventia " href="#" style={{marginBottom:"30px"}}>eventtia</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/eventsdetail">Events</a>
                            </li>
                            
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">Conatct Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">Dashboard</a>
                            </li>
                           

                            <li className="nav-item">
                                <a className="nav-link m" href="/">Logout</a>
                            </li>

                            <button className="btn1">Get Started</button>
                            
                        </ul>
                       
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar1
