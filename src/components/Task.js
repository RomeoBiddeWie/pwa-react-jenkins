import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className='task'
    >
      <h3>
        {task.ziel}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}, {task.time}</p>
      <p>Start: {task.start}</p>
      <p>Entfernung: {task.distance}{task.einheit}</p>
    </div>
  )
}

export default Task
