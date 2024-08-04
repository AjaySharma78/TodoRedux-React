
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='text-5xl text-zinc-400 '>TODO</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App