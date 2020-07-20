import React, { Component } from 'react'
import NavBar1 from '../components/NavBar1'

export class UseashBoard extends Component {
    render() {
        var arr=[
            {
               id:1,
               secret:"SERFTATA",
               link:"www.gffs.com",
               marked:false,
               date:"13-7-2013"
            },
            {
                id:2,
                secret:"SERFTATA",
                link:"www.gffs.com",
                marked:false,
                date:"13-7-2013"
            },
            {
                id:3,
               secret:"SERFTATA",
               link:"www.gffs.com",
               marked:false,
               date:"13-7-2013"
            },
            {
                id:1,
                secret:"SERFTATA",
                link:"www.gffs.com",
                marked:false,
                date:"13-7-2013"
            },
        ]
        var ans=arr.map((a)=>
        {
            return(
             <div style={{display:"flex",flexDirection:"row",margin:"30px"}}>
                 <div style={{display:"flex",flexDirection:"column",width:"33%",}} className="div15">
                  
                 </div>
                 <div style={{display:"flex",flexDirection:"column",width:"33%"}}>
                  <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>EVENT ${a["id"]}</h1> 
                  <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>Secret Code: ${a["secret"]}</h1>
                  <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>Link To Qr: ${a["link"]}</h1>  
                  
                 </div>
                 <div style={{display:"flex",flexDirection:"column",width:"33%",padding:"30px",}}>
                 <h1 style={{color:"purple",fontSize:"26px",fontWeight:"normal"}}>Date: ${a["date"]}</h1> 
                 <label>Attendance Marked</label>
                 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                
                 </div>
                 

             </div>
            )
        })
        return (
            <div >
                <NavBar1></NavBar1>
                <h1 style={{marginLeft:"580px",fontWeight:"normal",fontSize:"32px",marginTop:"20px"}}>USER DASHBOARD</h1>
                {ans}
            </div>
        )
    }
}

export default UseashBoard
