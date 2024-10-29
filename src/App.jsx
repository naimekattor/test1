import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import "./component/App.css";

function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </center>
    </>
  );
}

export default App;
