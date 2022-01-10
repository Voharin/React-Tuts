import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import "./styles/boxes.css";
import { DndProvider } from "react-dnd";
import React, { Component } from "react";
import Login from "./components/Login";
import Todo from "./components/Todo";
import Appx from "./test/Appx";

// const components = {
//   "Todo": <Todo/>,
//   "App": <App />,

// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: " ",
      listOfProduct: [
        { fruits: ["banana", "kiwi", "orange"] },
        { meals: ["burger", "sandwich"] },
        { salads: ["ceaser", "jallepano"] },
      ],
    };
  }

  handleClick = (event) => {
    this.setState((prevState) => ({ renderA: !prevState.renderA }));
  };
  changeComp = () => {
    console.log("sssss");
    return <Todo />;
  };

  render() {
    return (
      <div className="appWrapper">
        <Login change={this.changeComp}>
          <Todo />
        </Login>

        <Appx/>
       
        
      </div>
    );
  }
}

export default App;
