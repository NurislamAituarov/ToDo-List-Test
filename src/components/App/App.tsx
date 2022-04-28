import { Main } from '../Main/Main';
import './App.css';
import { Helmet } from 'react-helmet';
import icon from '../../image/favicon.png';
import Header from '../Header';
import { useAppSelector } from '../../Hooks/Hooks';
import { PopUpText } from '../Pop-up-text';
import { useEffect, useState } from 'react';

let i = 0;

const App: React.FC = () => {
  const { listItems } = useAppSelector((state) => state.reducer);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    if (i < listItems.length) {
      setTimer(true);
      setTimeout(() => setTimer(false), 1000);
      i = listItems.length;
    }
  }, [listItems]);

  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Todo List</title>
        <meta name="description" content="Todo List page description" />
        <link rel="icon" href={icon} type="image/png" />
      </Helmet>
      <Header />
      <Main />
      {<PopUpText isVisible={timer} />}
    </div>
  );
};

export { App };
