import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./style.module.scss";

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
