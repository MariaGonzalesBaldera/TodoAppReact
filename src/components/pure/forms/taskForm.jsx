import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const Taskform = ({ add, cant }) => {
  
  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const levelRef = useRef(LEVELS.NORMAL)

  function addTask(e) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      true,
      levelRef.current.value
    )
    add(newTask)
    nameRef.current.value = ''
    descriptionRef.current.value = ''
    levelRef.current.value = ''
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' placeholder='Task Name' className='form-control form-control-lg' required autoFocus />
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description' />
        <label htmlFor='selectLevel' className='sr-only'>Priority</label>
        <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectlevel'>
          <option value={LEVELS.NORMAL}>
            Normal
          </option>
          <option value={LEVELS.URGENT}>
            Urgent
          </option>
          <option value={LEVELS.BLOCKING}>
            Blocking
          </option>

        </select>
        <button type='submit' className='btn btn-success btn-lg ms-2'>
          {cant >0 ? 'Add new task':'Create first task'}
        </button>
      </div>
    </form>
  )
}
Taskform.protoType = {
  add: PropTypes.func.isRequired,
  cant : PropTypes.number.isRequired
}
export default Taskform




