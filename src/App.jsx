import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import { generateId } from './helpers'
import './App.css'

import { Button, Container, Grid, TextField } from '@mui/material'

function App() {
const [inputTodo, setInputTodo] =  useState('')
const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')): [])

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos) ?? [])
}, [todos])

const toggleTodo = (id)=>{
  const newTodos = [...todos]
  const todo = newTodos.find(todo=>todo.id === id)
  todo.completed = !todo.completed
  setTodos(newTodos)
}

const agregarTarea = ()=>{
  if([inputTodo].includes('')){
    alert('campo vacio')
    return
  }
  const nuevoTodo = {id:generateId(), task: inputTodo, completed:false}
  const todosActualizados = [...todos, nuevoTodo]
  setTodos(todosActualizados)
  setInputTodo('')
}

const handleClearAll = ()=>{
  const newTodos = todos.filter(todo => !todo.completed)
  setTodos(newTodos)
}
console.log(todos)
  return (
    <>
    
    
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        
        <TextField id="filled-basic" label="Nueva Tarea" variant="filled" value={inputTodo} onChange={e=>setInputTodo(e.target.value)}/>
        {/* <input type="text"placeholder='Nueva Tarea' value={inputTodo} onChange={e=>setInputTodo(e.target.value)} /> */}
        <Button onClick={agregarTarea} variant='contained' color='primary'>Agregar</Button>
        <p>
          te quedan {todos.filter(todo=> !todo.completed).length} tareas por terminar
        </p>
       
        
      </Grid>
      <Grid item xs={12} md={6}>
        {todos?.length > 0 ? (
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
          />

        ) : ('No hay tareas por mostrar!!') }
        {todos?.length > 0 && <Button variant='contained' color='error' onClick={handleClearAll}>Eliminar</Button> }
        
        
      </Grid>
      
    </Grid>
    
             
    </>
  )
}

export default App
