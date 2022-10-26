import style from "./style.module.scss";
import ButtonForm from "../ButtonForm";
import Clock from "./Clock";

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.stopwatchWrapper}>
        <Clock />
      </div>
      <ButtonForm text="Start!" />
    </div>
  );
}
