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
      user: " ",
      activeComponent: " ",
      fetchedData: [],
      listOfProduct: [
        { fruits: ["banana", "kiwi", "orange"] },
        { meals: ["burger", "sandwich"] },
        { salads: ["ceaser", "jallepano"] },
      ],
    };
  }

  // async componentDidMount() {
  //   const response =  await fetch("https://randomuser.me/api/")
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  //   const data =  response.json();
  //   this.setState({ user: data.results[0] });
  // }

  handleClick = (event) => {
    this.setState((prevState) => ({ renderA: !prevState.renderA }));
  };
  changeComp = () => {
    console.log("sssss");
    return <Todo />;
  };

   
 getApi = async ()=> {
    await fetch("http://localhost:89/first.php")
    .then(response =>response.text())
    .then(data=>this.setState({fetchedData: [...data]}))
    .then(data => console.log(data))
    .catch(err =>console.log(err));

   
  }

  componentDidMount(){
    this.getApi();
  }
  
  createELement (){
    let appWrapper = document.querySelector(".list");
    let lists = ["todo a", "todo b" , "todo c"];

    let nodes = lists.map((list, id) =>{
      return  {list}
      
    });
    console.log("node:", nodes);
    appWrapper.append(<di>...nodes</di>);
    console.log("nodes:", appWrapper);
  }

 
  render() {
    return (
      
      <div className="appWrapper">
        <div className="list">
        {this.createELement}
        </div>
        
        <Login change={this.changeComp}>
          <Todo />
        </Login>
            
        <Appx />

        {/* {this.data.map(name=>{return(<div>name.name</div>)})} */}
       {/* {
         data.map(item => {return(<div>{item.name}</div>)})
       }  */}

       {/* {this.state.fetchedData.map((element) => (<div>{element.name}</div>) 
         
       )} */}
       
        {/* (data=>{return (<h1>{data.name}</h1>)})} */}
<div className="dataWreapper">

          {this.state.fetchedData}
</div>
        </div>

    );
  
}
}
export default App;
