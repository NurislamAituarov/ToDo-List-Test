import './TodoAdd.scss';
import add from '../../image/add.png';
import { useRef, useState } from 'react';

import Todo from '../../store/Todo';
import { observer } from 'mobx-react-lite';

let index = 0;

const TodoAdd = observer(() => {
  const [value, setValue] = useState('');
  const [filterValue, setFilterValue] = useState(['Active', 'Completed', 'All']);
  const formRef = useRef();

  const div = document.createElement('div');
  div.innerHTML = 'Write the task';
  div.style.color = 'red';
  div.style.textAlign = 'start';

  function onAddItem(value) {
    if (value) {
      const newItem = {
        id: index++,
        name: value,
        select: false,
      };
      Todo.addTodo(newItem);
      setValue('');
    } else {
      formRef.current.appendChild(div);
    }
  }

  function onFilter(value) {
    Todo.filterTodo(value);
  }

  return (
    <div className="main__block todo__add">
      <form
        className="fadeAnimation"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          onAddItem(value);
        }}>
        <h1 className="fadeAnimation">Todo App</h1>
        <label>
          <input
            onChange={(e) => {
              setValue(e.target.value);
              if (e.target.value) {
                div.remove();
              }
            }}
            value={value}
            type="text"
          />
          <img onClick={() => onAddItem(value)} tabIndex={0} width="50" src={add} alt="addList" />
        </label>
      </form>
      <div className="buttons">
        {filterValue.map((item) => {
          return (
            <button
              style={Todo.filterItem === item ? { color: 'white', backgroundColor: 'black' } : null}
              onClick={() => onFilter(item)}
              key={item}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
});

export default TodoAdd;
