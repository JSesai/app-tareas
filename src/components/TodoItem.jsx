import { ListItem } from "@mui/material"

export default function TodoItem({ todo, toggleTodo }) {
    const {id, task, completed} = todo
    
  return (
    <ListItem>
        <input  type="checkbox" checked={completed} onChange={()=>toggleTodo(id)} />
        {task}
    </ListItem>
  )
}
