import React, { Component } from 'react'
import NavBar1 from '../components/NavBar1'

export class EventDes extends Component {
    render() {
        return (
            <div className="EventMain">
                <NavBar1></NavBar1>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "40%", height: "400px" }} className="descEvent">

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "70%", height: "400px", margin: "30px" }}>
                        <h1 style={{ fontSize: "36px", fontWeight: "normal", color: "purple" }}>Event Name</h1>

                        <h1 style={{ fontSize: "36px", fontWeight: "normal", color: "purple", paddingTop: "13px" }}>Registration Fees: Rs 12000</h1>
                        <p style={{ paddingRight: "400px", paddingLeft: "0px" }}>Her length is 62.40 m (204.7 ft), beam is 10.32 m (33.9 ft) and she has a draught of 3.45 m (11.3 ft). The hull is built out of steel while the superstructure is made out of aluminium with teak laid decks. The yacht is Lloyd's registered, issued by Cayman Islands.[citation needed]

                          Some of the ya.</p>
                        <br></br>

                        <form method="get" action="/register">
                            <button type="submit" className="btn5">Register</button>
                        </form>

                    </div>

                </div>
            </div>
        )
    }
}

export default EventDes
