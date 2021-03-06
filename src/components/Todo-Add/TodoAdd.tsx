import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './TodoAdd.scss';
import cn from 'classnames';

import { addItem } from '../../Actions/action';
import Plus from '../svg/Plus';
import { Buttons } from '../Buttons';
import { Filter } from '../svg/Filter';
import { IItem } from '../types';

const div = document.createElement('div');
div.innerHTML = 'Write the task';
div.style.cssText = 'color:red; text-align:start; position:absolute; bottom:-30px; left:0;';

const TodoAdd: React.FC = () => {
  const [value, setValue] = useState('');
  const [resize, setResize] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const formRef = useRef<HTMLLabelElement>(null);
  const refBlock = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    function onResize() {
      if (window.innerWidth <= 414) {
        setResize(false);
      }
      if (window.innerWidth > 414) {
        setResize(true);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  function onAddItem(value: string) {
    if (value) {
      const date = new Date().getTime();

      const newItem: IItem = {
        id: date,
        name: value,
        select: false,
      };
      dispatch(addItem(newItem));
      setValue('');
    } else {
      formRef.current!.appendChild(div);
    }
  }

  return (
    <div className="main__block todo__add">
      <form
        className="form fadeAnimation"
        onSubmit={(e) => {
          e.preventDefault();
          onAddItem(value);
        }}>
        <label ref={formRef}>
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
        </label>
        <Plus onAddItem={onAddItem} value={value} />
        {!resize && <Filter showFilter={showFilter} setShowFilter={setShowFilter} />}
      </form>
      {resize && <Buttons resize={resize} setShowFilter={setShowFilter} />}
      {
        <div className={cn('block__mobile', { active__popUp: showFilter })} ref={refBlock}>
          <h3>Sort by</h3>
          <Buttons showFilter={showFilter} setShowFilter={setShowFilter} refBlock={refBlock} />
        </div>
      }
    </div>
  );
};

export default TodoAdd;
