import React, { Component } from "react";
import { Fragment } from "react";



class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            userName: "",
            passWord: ""

        }
    }

      handleValue= async (e)=>{
        this.setState({
          userName: e.target.value
        })

      }
      handlePassword = async (e)=>{
        this.setState({passWord: e.target.value})
      }

      
        handleSubmit(e){  
          e.preventDefault();
          

        }
      

  render() {
    return (
      <Fragment>
 <div className="loginHeader">
          <h1>Login</h1>
        </div>

        <label htmlFor="username">User Name</label>
        <input type={"text"} 
               name="username" 
               placeholder="Username"
               value={this.state.userName}
               onChange={this.handleValue} />
            {console.log(this.state.userName)}
        <label htmlFor="password">PassWord</label>
        <input type="password" 
               name="password" 
               placeholder="Password"
               onChange={this.handlePassword} />

            <button onClick={this.handleSubmit} className="btn btn-primary"> Switch Component</button>
        
      </Fragment>
      
       
    );
  }
}

export default Login;
