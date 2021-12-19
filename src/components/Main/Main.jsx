import TodoAdd from '../Todo-Add/TodoAdd';
import TodoList from '../Todo-List/TodoList';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <TodoAdd />
      <TodoList />
    </main>
  );
};

export default Main;
