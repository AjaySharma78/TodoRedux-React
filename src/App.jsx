
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='text-5xl text-blue-900 '>TODO</h1>
      <p>Double click after save to add todo again.</p>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App