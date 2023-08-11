import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
//
function App() {
  const [todos, setTodos] = useState([])

  const addToDoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const clearCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addToDoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          clearCompleted={clearCompletedHandler}
          completedTodosExist={!!completedTodoCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      ></TodoList>
      {!!completedTodoCount && (
        <h2>
          {`You have completed ${completedTodoCount} ${
            completedTodoCount > 1 ? 'todos' : 'todo'
          } !`}
        </h2>
      )}
    </div>
  )
}

export default App
