import style from "./style.module.scss";

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [tensOfMinutes, unityMinutes] = String(minutes).padStart(2, '0')
  const [tensOfSeconds, unitySeconds] = String(seconds).padStart(2, '0')

  return (
    <>
      <span className={style.clockNumber}>{tensOfMinutes}</span>
      <span className={style.clockNumber}>{unityMinutes}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{tensOfSeconds}</span>
      <span className={style.clockNumber}>{unitySeconds}</span>
    </>
  );
}
