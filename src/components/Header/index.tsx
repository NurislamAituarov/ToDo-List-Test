import { useEffect, useState } from 'react';
import { UseTheme } from '../../Hooks/useTheme';
import { Day } from '../svg/Day';
import { Theme } from '../svg/Theme';
import './Header.scss';

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = UseTheme();

  useEffect(() => {
    if (localStorage.getItem('app-theme') === 'dark') {
      setToggle(false);
    }
  }, []);

  return (
    <header className="header">
      <h1>TODO</h1>
      {toggle ? (
        <Theme toggle={toggle} setToggle={setToggle} setTheme={setTheme} />
      ) : (
        <Day toggle={toggle} setToggle={setToggle} setTheme={setTheme} />
      )}
    </header>
  );
}
