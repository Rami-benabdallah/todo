import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const handleClick = (id) => dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });
  if (!todos || !todos.length) {
    return <p>NO TODOS</p>
  }
  return (
    <ul>
      {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
    </ul>
  )
};
const TodoInpout = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (e) => setNewTodo(e.target.value);
  const handleClick = () => {if (newTodo) {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      }
    });
  }}
  return (
    <>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>ADD TODO</button>
    </>
  ) 
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODOS
        </p>
        <Todos/>
        <TodoInpout/>
      </header>
    </div>
  );
}

export default App;
