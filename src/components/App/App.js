import Main from '../Main/Main';
import './App.css';
import { Helmet } from 'react-helmet';
import icon from '../../image/favicon.png';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Todo List</title>
        <meta name="description" content="Todo List page description" />
        <link rel="icon" href={icon} type="image/png" />
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
