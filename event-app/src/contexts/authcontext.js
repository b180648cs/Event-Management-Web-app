import React ,{createContext,useState, Component}from 'react'

export const AuthContext=createContext();
class  AuthContextProvider extends Component{
    state = {
        users: 
                {
                  
                },
        searchString: '',
        isAuth:false
      }
     toogleAuth=(v)=>{
         console.log("ysusuus")
       this.setState({isAuth:v})
       console.log(this.state.isAuth)
    }
     setValue=(detail)=>{
     this.setState({users:detail})
     console.log(this.state.users);    
    }
    render()
    {
    return (
    <AuthContext.Provider value={{...this.state,setValue:this.setValue,toogleAuth:this.toogleAuth}
    }>
        {this.props.children}
    </AuthContext.Provider>
    )
}
}
export default AuthContextProvider;