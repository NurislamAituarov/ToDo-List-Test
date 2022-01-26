import './TodoAdd.scss';
import add from '../../image/add.png';
import { useRef, useState } from 'react';

import Todo from '../../store/Todo';
import { observer } from 'mobx-react';

let index = 0;

interface ItemType {
  id: number;
  name: string;
  select: boolean;
}

const TodoAdd: React.FC = observer(() => {
  const [value, setValue] = useState('');
  const filterValue: Array<string> = ['Active', 'Completed', 'All'];
  const formRef = useRef<HTMLFormElement>(null);

  const div = document.createElement('div');
  div.innerHTML = 'Write the task';
  div.style.color = 'red';
  div.style.textAlign = 'start';

  const onAddItem = (value: string) => {
    if (value) {
      const newItem: ItemType = {
        id: index++,
        name: value,
        select: false,
      };
      Todo.addTodo(newItem);
      setValue('');
    } else {
      formRef.current?.appendChild(div);
    }
  };

  function onFilter(value: string) {
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
