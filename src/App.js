import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h1 className='app-name'>Todo App</h1>
      <div className="todo-app">
        <TodoList />
      </div></>
  );
}

export default App;
