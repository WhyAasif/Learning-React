import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      duedate: "04/05/2020",
    },
    {
      name: "Got to school",
      duedate: "04/05/2020",
    },
    {
      name: "Mobile recharge",
      duedate: "04/05/2020",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
