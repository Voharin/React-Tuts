import React, { Component } from "react";
import Todo from "../components/Todo";
import AddTripButton from "./AddTripButton";

class Appx extends Component {

    constructor(props){
        super(props)
        this.state="start"
    }


  render() {
    return (
      <div className="loginWrapper">
       <AddTripButton addTrip={()=> this.setState("add-trip")} />
                {this.state==="add-trip" && <Todo/>}

                <Todo/>
      </div>
    );
  }
}

export default Appx;
