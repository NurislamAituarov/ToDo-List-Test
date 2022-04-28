import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { filterItem } from '../../Actions/action';
import { useAppSelector } from '../../Hooks/Hooks';
import { useEffect } from 'react';
const filterValue = ['Active', 'Completed', 'All'];

interface IButtons {
  showFilter?: boolean;
  resize?: boolean;
  setShowFilter: (event: boolean) => void;
  refBlock?: any;
}

export function Buttons({ showFilter, resize, setShowFilter, refBlock }: IButtons) {
  const filterItemValue = useAppSelector((state) => state.reducer.filterItem);
  const dispatch = useDispatch();

  function handleClose(e: any) {
    if (showFilter && !refBlock.current?.contains(e.target)) {
      setShowFilter(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [showFilter]);

  function onFilter(item: string) {
    dispatch(filterItem(item));
    setShowFilter(false);
  }

  const variants = {
    visible: {
      // y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
    hidden: {
      // y: -150,
    },
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
      className="buttons">
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
