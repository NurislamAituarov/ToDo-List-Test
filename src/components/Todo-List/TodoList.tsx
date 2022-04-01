import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoList.scss';

import pen from '../../image/pen.png';
import { removeItem, selectItem, changeValue } from '../../Actions/action';
import Close from '../svg/Close';
import Completed from '../svg/Completed';
import { useAppSelector } from '../../Hooks/Hooks';
import { IItem } from '../types';

const TodoList: React.FC = () => {
  const { listItems, filterItem } = useAppSelector((state) => state.reducer);
  let newFilterItem = null;
  const refInput = useRef([] as any);
  const dispatch = useDispatch();

  switch (filterItem) {
    case 'All':
      newFilterItem = listItems;
      break;
    case 'Completed':
      newFilterItem = listItems.filter((item: IItem) => item.select);
      break;
    case 'Active':
      newFilterItem = listItems.filter((item: IItem) => !item.select);
      break;
    default:
      newFilterItem = listItems;
  }

  function onChange(i: number) {
    refInput.current[i].focus();
  }
  function onSelected(i: number) {
    dispatch(selectItem(i));
  }
  function onDelete(i: number) {
    dispatch(removeItem(i));
  }
  function onChangeValue(value: string, i: number) {
    dispatch(changeValue(value, i));
  }

  return (
    <TransitionGroup elements="div" className="main__block todo__list">
      {listItems.length
        ? newFilterItem.map((item: IItem) => {
            return (
              <CSSTransition key={item.id} timeout={500} classNames="item fade">
                <div key={item.id} tabIndex={0} className="todo__list_block">
                  <textarea
                    ref={(el) => (refInput.current[item.id] = el)}
                    onChange={(e) => onChangeValue(e.target.value, item.id)}
                    value={item.name}
                  />
                  <div className="todo__list_change">
                    <img onClick={() => onChange(item.id)} width="17" src={pen} alt="pen" />
                    {filterItem !== 'Completed' ? (
                      <Completed onSelected={onSelected} listItems={item} id={item.id} />
                    ) : null}
                    <Close onDelete={onDelete} id={item.id} />
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
