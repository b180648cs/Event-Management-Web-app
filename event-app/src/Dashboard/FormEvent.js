import React, { Component } from 'react'

export class FormEvent extends Component {
    render() {
        return (
            <div style={{margin:"40px"}}>
                <h3>Event Details</h3>

            <div style={{marginTop:"50px"}} >
             <form>
                 <label for="Event name"></label>
                 <input type="text" value="Name" placeholder="name" />
                 <label for="Event name"></label>

                 <input type="text" value="Registartion Fees" placeholder="name" style={{marginLeft:"40px"}}/>
             </form>
            </div>
            <div style={{marginTop:"50px"}}>
            <form>
                 <label for="Event name"></label>
                 <input type="text" value="Detail" placeholder="name" />
                 <label for="Event name"></label>

                 <input type="text" value="Image url" placeholder="name" style={{marginLeft:"40px"}}/>
             </form>
            </div>
            <div style={{marginTop:"50px"}}>
            <form>
                 <label for="Event name"></label>
                 <input type="text" value="Type of event" placeholder="name" />
                 <label for="Event name"></label>
                  <form method="get" action="/admindashboard" style={{marginTop:"30px"}}><input type="submit" value="Create" placeholder="name" style={{marginLeft:"40px",width:"90px"}}/></form>
                 
             </form>
            </div>
            </div>
        )
    }
}

export default FormEvent
