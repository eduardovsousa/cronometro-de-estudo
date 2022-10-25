import style from './style.module.scss'
import ButtonForm from '../ButtonForm'
import Clock from './Clock'

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.stopwatchWrapper}>
        <Clock />
      </div>
      <ButtonForm text='Start!'/>
    </div>


  )
}