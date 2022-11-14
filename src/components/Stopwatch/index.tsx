import style from "./style.module.scss";
import ButtonForm from "../ButtonForm";
import Clock from "./Clock";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
  selected: ITask | undefined,
  endTask: () => void
}

export default function Stopwatch({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected])

  function regressive(count: number = 0) {
    setTimeout(() => {
      if(count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      endTask();
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.stopwatchWrapper}>
        <Clock time={time} />
      </div>
      <ButtonForm onClick={() => regressive(time) } text="Start!" />
    </div>
  );
}
