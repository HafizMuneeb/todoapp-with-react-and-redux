
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {


  return (
    <>
      <h1>Todo App with React Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
