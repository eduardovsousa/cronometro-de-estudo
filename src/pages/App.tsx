import { useState } from "react";
import FormsTask from "../components/FormsTask";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/task";
import style from "./style.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function handlerTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selected: task.id === taskSelected.id ? true : false,
      }))
    );
  }

  function endTask() {
    if(selected) {
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            complete: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <FormsTask setTasks={setTasks} />
      <List tasks={tasks} selectedTask={handlerTask} />
      <Stopwatch 
        selected={selected}
        endTask={endTask}
        />
    </div>
  );
}

export default App;
