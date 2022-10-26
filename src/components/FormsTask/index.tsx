import React from 'react';
import { ITask } from '../../types/task';
import ButtonForm from '../ButtonForm';
import style from './style.module.scss'

class FormsTask extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    task: "",
    time: "00:00"
  }

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTasks(oldTasks => [...oldTasks, {...this.state}])
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={ this.addTask.bind(this) }>
        <div className={style.inputContainer}>
          <label htmlFor="task">
            Add a new Task!
          </label>
          <input 
            type="text"
            name="task"
            value={this.state.task}
            onChange={ event => this.setState({...this.state, task: event.target.value })}
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
            value={this.state.time}
            onChange={event => this.setState({...this.state, time: event.target.value })}
            id="time"
            min="00:00:00"
            max="01:30"
            required
          />
        </div>
        <ButtonForm type="submit" text='Add task'/>
      </form>
    )
  }
}

export default FormsTask;