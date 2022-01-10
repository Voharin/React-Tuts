import React, { Component } from "react";



class AddTripButton extends Component {

    constructor(props){
        super(props)
        this.state=""
    }


  render() {
    return (
      <div className="loginWrapper">
                    <button onClick={this.props.addTrip}> Add a Trip </button>

      </div>
    );
  }
}

export default AddTripButton;
