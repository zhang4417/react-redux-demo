import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'
import './App.css';



function App() {
  return (
    <>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <ShowTodo/>
    </>
  );
}

export default App;
