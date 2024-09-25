import { useRef, useState } from 'react'
export const TodoList = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef()
  const handleClick = () => {
    const text = inputRef.current.value
    const newItem = {completed: false, text}
    console.log(text);
    setTodos([...todos, newItem])
    inputRef.current.value = ''
  }

  const handleCompleted = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos)
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className="todo">
      <h2>To-Do-List</h2>
      <input ref={inputRef} type="text" placeholder="Enter Task" />
      <button onClick={handleClick}>Add Task</button>
      <ul>
        {todos.map(({text, completed}, index) => {
          return (
            <div className='list' key={index}>
              <li className={completed ? 'done' : ''} onClick={() => handleCompleted(index)}>{text}</li>
              <span className='fa-solid fa-trash' onClick={() => handleDelete(index)}></span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
