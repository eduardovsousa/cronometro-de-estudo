import React from 'react';
import ButtonForm from '../ButtonForm';
import style from './style.module.scss'

class FormsTask extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Add a new Task!
          </label>
          <input 
            type="text"
            name="task"
            id="task"
            placeholder="What are you going to study?"
            required
          />
          
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">
            Time
          </label>
          <input 
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30"
            required
          />
        </div>
        <ButtonForm text='Add task'/>
      </form>
    )
  }
}

export default FormsTask;