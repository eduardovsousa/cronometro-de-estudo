import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./style.module.scss";

interface Props {
  tasks: ITask[];
  selectedTask: (taskSelected: ITask) => void;
}

function List({ tasks, selectedTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task) => (
          <Item
            selectedTask={selectedTask}
            key={task.id} //Item ou task?
            {...task}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
