import { useState } from 'react';
import FormsTask from '../components/FormsTask';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITask } from '../types/task';
import style from './style.module.scss'

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <FormsTask setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Stopwatch />
    </div>
  );
}

export default App;
