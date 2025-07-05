import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'
import TodoList from './TodoList';


function App() {

  const winCondition = (ticket) =>{
    return sum(ticket)=== 15;
  };

  return (
    <>
    <h2>Todo List App</h2>
    {/* <Lottery n={3} winCondition={winCondition}/> */}
    <TodoList/>
    </>
  )
}

export default App;
