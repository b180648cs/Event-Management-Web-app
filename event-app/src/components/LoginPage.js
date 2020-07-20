import React, { Component } from 'react'

export class LoginPage extends Component {
    state={
        isMarked:false,
        ans:"/login"
    }
    onSubmit =()=>
    {
        this.setState({isMarked:!this.state.isMarked,ans:"/loginadmin"})
    }
    render() {
        return (
            <div style={{margin:"100px",marginLeft:"500px",marginRight:"500px"}}>
                <h1 style={{fontWeight:"normal"}}>Login</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                 </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                                 </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={this.onSubmit} />
                                    <label class="form-check-label" for="exampleCheck1">Are you admin</label>
                                           </div>
                                          
                                           <form method="get" action={this.state.ans}> <button type="submit" class="btn btn-primary">Login</button></form>
                                           
                                      </form>
                        </div>
        )
    }
}

export default LoginPage
