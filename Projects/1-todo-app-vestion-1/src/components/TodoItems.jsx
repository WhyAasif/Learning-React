import TodoItem from "./TodoItem";


function TodoItems({ todoItems }) {
  return (
    <div className="itme-container">
      {todoItems.map((item)=>(<TodoItem todoName={item.name} todoDate={item.duedate}></TodoItem>))}
    
    </div>
  );
}

export default TodoItems;