import logo from "./logo.svg";
import "./App.css";
import Add from "./components/add";
import { useState } from "react";
import Listtasck from "./components/listtasck";
import Filterdone from "./components/filterdone";
import Filterundone from "./components/filterundone";
import All from "./components/all";
import { useSelector } from "react-redux";
import { Container, Row,Col } from "react-bootstrap";

function App() {
  const [choix, setChoix] = useState("ALL");
  const [fdone, setFdone] = useState([]);
  const tascks = useSelector((state) => state.todoReducer);
  console.log(tascks);

  const Handelfilterdone = () => {
    setChoix("done");
  };
  const handelfilterun = () => {
    setChoix("undone");
  };
  const handelall = () => setChoix("ALL");

  return (
    <div className="App">
      <Container>
        <Row><h1>Todo List</h1></Row>
        <Row className="todo-style">
          <All handelall={handelall} />
         <Filterdone handelfilterdone={Handelfilterdone} />
         <Filterundone handelfilterun={handelfilterun} />
        </Row>
        <Row>
          <Add />
        </Row>
        <Row>
        <Listtasck choix={choix} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
