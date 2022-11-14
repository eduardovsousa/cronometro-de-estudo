import { ITask } from "../../../types/task";
import style from "./style.module.scss";

interface Props extends ITask {
  selectedTask: (taskSelected: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  complete,
  id,
  selectedTask,
}: Props) {

  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ''} ${complete ? style.itemComplete : ''}`}
      onClick={() =>
        !complete && selectedTask({
          task,
          time,
          selected,
          complete,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {complete && <span className={style.concluded} aria-label="task complete"></span>}
    </li>
  );
}
