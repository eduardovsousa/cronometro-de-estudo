import FormsTask from '../components/FormsTask';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import style from './style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <FormsTask />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
