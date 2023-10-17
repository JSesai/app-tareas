import TodoItem from "./TodoItem"
import { List } from "@mui/material"


export default function TodoList({ todos, toggleTodo }) {
    // console.log(todos);
  return (
    
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(todo=>(
          <TodoItem 
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
      />
        ))}

      </List>
    
  )
}
