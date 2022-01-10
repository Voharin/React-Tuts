import React, { Component } from "react";
import { Fragment } from "react";



class Login extends Component {

    constructor(props){
        super(props)
        this.state=""
    }


  render() {
    return (
      <Fragment>
 <div className="loginHeader">
          <h1>Login</h1>
        </div>

        <label htmlFor="username">User Name</label>
        <input type={"text"} name="username" placeholder="Username" />

        <label htmlFor="password">PassWord</label>
        <input type={"text"} name="password" placeholder="Password" />

            <button onClick={this.props.change}> Switch Component</button>
        
      </Fragment>
      
       
    );
  }
}

export default Login;
