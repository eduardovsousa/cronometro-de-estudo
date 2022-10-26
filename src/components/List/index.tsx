import { useState } from "react";
import Item from "./Item";
import style from './style.module.scss'

function List() {
  const [tasks, setTasks] = useState([{
    task: 'React',
    time: '02:00:00'
  }, {
    task: 'Javascript',
    time: '01:00:00'
  }, {
    task: 'Typescript',
    time: '01:30:00'
  }]);

  return (
    <aside className={style.taskList}>
      <h2 onClick={() => {
        setTasks([...tasks, { task: "Study state", time: "05:00:00" }])
      }}>Studies of the day</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item
            key={index}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;