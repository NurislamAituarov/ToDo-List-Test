import { useRef, useState } from 'react';
import { addItem, filterItem } from '../../Actions/action';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Plus from '../svg/Plus';
import './TodoAdd.scss';
import { useAppSelector } from '../../Hooks/Hooks';

let index = 0;

const TodoAdd: React.FC = () => {
  const filterItemValue = useAppSelector((state) => state.reducer.filterItem);

  // const filterItemValue = useSelector((state: RootStateOrAny) => state.reducer.filterItem);
  const [value, setValue] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();
  const filterValue = ['Active', 'Completed', 'All'];

  const div = document.createElement('div');
  div.innerHTML = 'Write the task';
  div.style.color = 'red';
  div.style.textAlign = 'start';

  function onAddItem(value: string) {
    if (value) {
      const newItem = {
        id: index++,
        name: value,
        select: false,
      };
      dispatch(addItem(newItem));
      setValue('');
    } else {
      formRef.current!.appendChild(div);
    }
  }

  function onFilter(item: string) {
    dispatch(filterItem(item));
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

          <Plus onAddItem={onAddItem} value={value} />
        </label>
      </form>
      <div className="buttons">
        {filterValue.map((item) => {
          return (
            <button
              style={filterItemValue === item ? { color: 'white', backgroundColor: 'black' } : null}
              onClick={() => onFilter(item)}
              key={item}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TodoAdd;
