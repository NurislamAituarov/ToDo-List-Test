import './TodoList.scss';
import pen from '../../image/pen.png';
import selected from '../../image/selected.png';
import deleted from '../../image/deleted.png';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, selectItem, changeValue } from '../../Actions/action';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TodoList = () => {
  const { listItems, filterItem } = useSelector((state) => state.reducer);
  let newFilterItem = '';
  const refInput = useRef([]);
  const dispatch = useDispatch();

  useEffect(() => {}, [listItems]);

  switch (filterItem) {
    case 'All':
      newFilterItem = listItems;
      break;
    case 'Completed':
      newFilterItem = listItems.filter((item) => item.select);
      break;
    case 'Active':
      newFilterItem = listItems.filter((item) => !item.select);
      break;
    default:
      newFilterItem = listItems;
  }

  function onChange(i) {
    refInput.current[i].focus();
  }
  function onSelected(i) {
    dispatch(selectItem(i));
  }
  function onDelete(i) {
    dispatch(removeItem(i));
  }
  function onChangeValue(value, i) {
    dispatch(changeValue(value, i));
  }
  return (
    <TransitionGroup elements="div" className="main__block todo__list">
      {listItems.length
        ? newFilterItem.map((item, i) => {
            return (
              <CSSTransition key={item.id} timeout={500} classNames="item fade">
                <div key={item.id} tabIndex={0} className="todo__list_block">
                  <textarea
                    ref={(el) => (refInput.current[item.id] = el)}
                    onChange={(e) => onChangeValue(e.target.value, item.id)}
                    value={item.name}
                  />
                  <div className="todo__list_change">
                    <img onClick={() => onChange(item.id)} width="20" src={pen} alt="pen" />
                    {filterItem !== 'Completed' ? (
                      <img
                        onClick={() => onSelected(item.id)}
                        width="20"
                        src={selected}
                        alt="selected"
                      />
                    ) : null}
                    <img onClick={() => onDelete(item.id)} width="18" src={deleted} alt="deleted" />
                  </div>
                  {filterItem === 'Completed' ? <span className="change__block">done</span> : null}
                </div>
              </CSSTransition>
            );
          })
        : null}
    </TransitionGroup>
  );
};

export default TodoList;
