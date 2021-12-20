import './TodoList.scss';
import pen from '../../image/pen.png';
import selected from '../../image/selected.png';
import deleted from '../../image/deleted.png';
import { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Todo from '../../store/Todo';

const TodoList = observer(() => {
  let newFilterItem = '';
  const refInput = useRef([]);

  switch (Todo.filterItem) {
    case 'All':
      newFilterItem = Todo.listItems;
      break;
    case 'Completed':
      newFilterItem = Todo.listItems.filter((item) => item.select);
      break;
    case 'Active':
      newFilterItem = Todo.listItems.filter((item) => !item.select);
      break;
    default:
      newFilterItem = Todo.listItems;
  }

  function onChange(i) {
    refInput.current[i].focus();
  }
  function onSelected(i) {
    Todo.CompletedTodo(i);
  }
  function onDelete(i) {
    Todo.removeTodo(i);
  }
  function onChangeValue(value, i) {
    Todo.changeTodoValue(value, i);
  }
  return (
    <TransitionGroup elements="div" className="main__block todo__list">
      {Todo.listItems.length
        ? newFilterItem.map((item, i) => {
            return (
              <CSSTransition key={item.id} timeout={500} classNames="item fade">
                <div key={item.id} tabIndex={0} className="todo__list_block">
                  <textarea
                    ref={(el) => (refInput.current[item.id] = el)}
                    onChange={(e) => onChangeValue(e.target.value, item.id)}
                    type="text"
                    value={item.name}
                  />
                  <div className="todo__list_change">
                    <img onClick={() => onChange(item.id)} width="20" src={pen} alt="pen" />
                    {Todo.filterItem !== 'Completed' ? (
                      <img
                        onClick={() => onSelected(item.id)}
                        width="20"
                        src={selected}
                        alt="selected"
                      />
                    ) : null}
                    <img onClick={() => onDelete(item.id)} width="18" src={deleted} alt="deleted" />
                  </div>
                  {Todo.filterItem === 'Completed' ? (
                    <span className="change__block">done</span>
                  ) : null}
                </div>
              </CSSTransition>
            );
          })
        : null}
    </TransitionGroup>
  );
});

export default TodoList;
