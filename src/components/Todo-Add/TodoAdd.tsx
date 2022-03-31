import { useEffect, useRef, useState } from 'react';
import { addItem } from '../../Actions/action';
import { useDispatch } from 'react-redux';
import Plus from '../svg/Plus';
import './TodoAdd.scss';
import { Buttons } from '../Buttons';
import { Filter } from '../svg/Filter';
import { IItem } from '../types';

let index = 0;

const TodoAdd: React.FC = () => {
  const [value, setValue] = useState('');
  const [resize, setResize] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const refBlock = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  // console.log('render');

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < 378) {
        setResize(false);
      }
      if (window.innerWidth > 378) {
        setResize(true);
      }
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // useEffect(() => {
  //   function handleClose(e: any) {
  //     if (showFilter && refBlock.current && !refBlock.current.contains(e.target)) {
  //       // setShowFilter(false);
  //     }
  //   }
  //   document.addEventListener('click', handleClose, true);
  //   return () => {
  //     document.removeEventListener('click', handleClose, true);
  //   };
  // }, []);

  const div = document.createElement('div');
  div.innerHTML = 'Write the task';
  div.style.color = 'red';
  div.style.textAlign = 'start';

  function onAddItem(value: string) {
    if (value) {
      const newItem: IItem = {
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

  return (
    <div className="main__block todo__add">
      <form
        className="fadeAnimation"
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          onAddItem(value);
        }}>
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
          {!resize && <Filter showFilter={showFilter} setShowFilter={setShowFilter} />}
        </label>
      </form>
      {resize && <Buttons resize={resize} setShowFilter={setShowFilter} />}
      {showFilter && (
        <div className="block__mobile" ref={refBlock}>
          <h3>Sort by</h3>
          <Buttons showFilter={showFilter} setShowFilter={setShowFilter} />
        </div>
      )}
    </div>
  );
};

export default TodoAdd;
