import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'
import Taskform from '../pure/forms/taskForm'
const TaskListComponent= () => {

  const Task1 = new Task('Example1','description1',true,LEVELS.NORMAL)
  const Task2 = new Task('Example2','description2',false,LEVELS.URGENT)
  const Task3 = new Task('Example3','description3',true,LEVELS.BLOCKING)

    const [tasks,setTasks] = useState([Task1,Task2,Task3])
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
        <div className='col-12'>
          <div className='card'>
              <div className='card-header p-3'>
                  <h5>
                  Your Tasks:
                  </h5>
              </div>
              <div className='card-body' data-mdb-perfect-onScroll='true' style={ {position:'relative',height:'400px'} }>
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
                  {tasks.map((task,index)=>{
                      return(
                        <TaskComponent key={index} task={task}></TaskComponent>
                      )  
                    }
                  )}
                    <TaskComponent task={Task1} ></TaskComponent>                    
                  </tbody>
                </table>
              </div>
              <Taskform>
                
              </Taskform>
          </div>
        </div>
        {/* TODO: Aplicar un for/map para renderizar una lista*/}
    </div>
  )
}

export default TaskListComponent