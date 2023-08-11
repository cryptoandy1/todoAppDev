import { useState, useRef } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm(props) {
  const { addTodo } = props
  const ref = useRef(null)
  const [currInput, setCurrInput] = useState('')

  function onSubmitHandler(event) {
    event.preventDefault()
    addTodo(currInput)
    setCurrInput('')
    ref.current.focus()
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          className={styles.input}
          placeholder="Enter new todo"
          value={currInput}
          ref={ref}
          autoFocus
          onChange={(e) => setCurrInput(e.target.value)}
        ></input>
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
