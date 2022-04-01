import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { filterItem } from '../../Actions/action';
import { useAppSelector } from '../../Hooks/Hooks';
import { useEffect, useRef } from 'react';
const filterValue = ['Active', 'Completed', 'All'];

interface IButtons {
  showFilter?: boolean;
  resize?: boolean;
  setShowFilter: (event: boolean) => void;
}

export function Buttons({ showFilter, resize, setShowFilter }: IButtons) {
  const filterItemValue = useAppSelector((state) => state.reducer.filterItem);
  const dispatch = useDispatch();
  const refBlock = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClose(e: any) {
      if (showFilter && refBlock.current && !refBlock.current.contains(e.target)) {
        setShowFilter(false);
      }
    }
    document.addEventListener('click', handleClose, true);
    return () => {
      document.removeEventListener('click', handleClose, true);
    };
  }, []);

  function onFilter(item: string) {
    dispatch(filterItem(item));
    setShowFilter(false);
  }

  const variants = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {},
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial={'hidden'}
      animate={showFilter || resize ? 'visible' : 'hidden'}
      className="buttons"
      ref={refBlock}>
      {filterValue.map((item, i) => {
        return (
          <motion.div key={i} variants={variantsChildren}>
            <button
              style={filterItemValue === item ? { color: 'white', backgroundColor: 'black' } : null}
              onClick={() => onFilter(item)}
              key={item}>
              {item}
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
