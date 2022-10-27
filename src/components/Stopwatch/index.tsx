import style from "./style.module.scss";
import ButtonForm from "../ButtonForm";
import Clock from "./Clock";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

interface Props {
  selected: ITask | undefined
}

export default function Stopwatch({ selected }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time) {
      setTime(timeToSeconds(selected.time))
    }
  }, [selected])

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.stopwatchWrapper}>
        <Clock time={time} />
      </div>
      <ButtonForm text="Start!" />
    </div>
  );
}
