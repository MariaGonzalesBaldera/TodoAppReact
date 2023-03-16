import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'
const TaskListComponent= () => {

  const defaultTask = new Task('Example','Default description',false,LEVELS.NORMAL)

    const [tasks,setTasks] = useState({defaultTask})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
      console.log('Task state has been modifiend')
      setLoading(false)
      return ()=>{
        console.log('TaskList component is going to unmount...')
      }
    })


    const changeCompleted =(id)=>{
        console.log('Cambiar de estado de una tarea')
    }
  return (
    <div>
        <div><h1>Your Tasks:</h1></div>
        {/* TODO: Aplicar un for/map para renderizar una lista*/}
        <TaskComponent task={defaultTask} ></TaskComponent>
    </div>
  )
}

export default TaskListComponent