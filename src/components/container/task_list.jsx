import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'
import Taskform from '../pure/forms/taskForm'
const TaskListComponent = ({ task }) => {

  const Task1 = new Task('Example1', 'description1', true, LEVELS.NORMAL)
  const Task2 = new Task('Example2', 'description2', false, LEVELS.URGENT)
  const Task3 = new Task('Example3', 'description3', true, LEVELS.BLOCKING)

  const [tasks, setTasks] = useState([Task1, Task2, Task3])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log('Task state has been modifiend')
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    setLoading(false)
    return () => {
      console.log('TaskList component is going to unmount...')
    }
  }, [tasks])

  function completeTask(task) {
    console.log('Completed task ', task)
    const index = tasks.indexOf(task)
    const temTasks = [...tasks]
    temTasks[index].completed = !temTasks[index].completed
    setTasks(temTasks)
  }
  function deleteTask(task) {
    console.log('Delete this Task ', task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.splice(index, 1)
    setTasks(tempTasks)
  }

  function addTask(task) {
    console.log('Add this task', task)
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks)
  }
  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Descripción</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            )
          }
          )}
        </tbody>
      </table>
    )
  }
  let taskTable;
  if (tasks.length > 0) {
    taskTable = <Table></Table>
  } else {
    taskTable = <div><h3>There are not task</h3>
    <span>Plase, add one</span></div>
  }
  const LoadingStyle={
    color:'grey',
    fontSoze: '30px',
    fontWeight:'bold'
  }
  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>
              Your Tasks:
            </h5>
          </div>
          <div className='card-body data-mdb-perfect-onScroll={true}' style={{ position: 'relative', height: '400px' }}>
            { loading ? (<p style={LoadingStyle}>Loading tasks ...</p>) : taskTable}
          </div>
        </div>
      </div>
      {/* TODO: Aplicar un for/map para renderizar una lista*/}
      <Taskform add={addTask} cant={tasks.length}>

      </Taskform>
    </div>
  )
}

export default TaskListComponent