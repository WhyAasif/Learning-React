import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css'

function TodoItems({ todoItems }) {
  return (
    <div className={styles.container}>
      {todoItems.map((item)=>(<TodoItem key={item.name} todoName={item.name} todoDate={item.duedate}></TodoItem>))}
    
    </div>
  );
}

export default TodoItems;