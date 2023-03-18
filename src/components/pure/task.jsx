import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'
const TaskComponent = ({ task }) => {

    useEffect(() => {
      console.log('Tarea creada')
    
      return () => {
        console.log(`Task: ${task.name}  id going to`)
      }
    }, [task])
    function taskLevelBadge(){
      if(task.level === LEVELS.NORMAL){
        return(
            <h6 className='mb-0'>
                <span className='badge bg-primary'>
                   {task.level}                 
                </span>
            </h6>
        )
      }else if(task.level === LEVELS.URGENT){
        return(
            <h6 className='mb-0'>
                <span className='badge bg-warning'>
                   {task.level}                 
                </span>
            </h6>
        )
      }else if(task.level === LEVELS.BLOCKING){
        return(
            <h6 className='mb-0'>
                <span className='badge bg-danger'>
                   {task.level}                 
                </span>
            </h6>
        )
      }   
    }
    function taskIconCompleted(){
        if(task.completed){
            return(<i className='bi-toggle-on' style={{color:'green'}}></i>)
        }
        return (<i className='bi-toggle-off' style={{color:'grey'}}></i>)
        
    }    
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-midle'>
                <span>{task.description}</span>
            </td>
            <td className='align-midle'>
                {taskLevelBadge()}
            </td>
            <td className='align-midle'>
                {taskIconCompleted()}
                <i className='bi-trash' style={{color:'tomato'}}></i>
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
