import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import "./styles/boxes.css";
import { DndProvider } from "react-dnd";


function App() {
  return (
    <div className="App">
      <DragDropContext>
        <div className="wrapper">
          <div className="wrapper__left">
           
              <div className="wrapper__left__box1 --bluebox" draggable 
              onDragStart={()=>{}}
              onDragEnd={()=>{}}
              >box1</div>
              <div className="wrapper__left__box2">box2</div>
              <div className="wrapper__left__box3">box3</div>
            
          </div>
          <div className="wrapper__right"
          onDragOver={(e)=>{e.preventDefault()}}>Right</div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
