import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [ziel, setZiel] = useState('')
  const [start, setStart] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [distance, setDistance] = useState('')
  const [einheit, setEinheit] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!ziel) {
      alert('Bitte ein Ziel eingeben')
      return
    }

    onAdd({ ziel, start, day, time, distance, einheit})

    setZiel('')
    setDay('')
    setStart('')
    setTime('')
    setDistance('')
    setEinheit('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Ziel</label>
        <input
          type='text'
          placeholder='Ziel eingeben'
          value={ziel}
          onChange={(e) => setZiel(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Start</label>
        <input
          type='text'
          placeholder='Start eingeben'
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Tag</label>
        <input
          type='text'
          placeholder='Tag'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Zeit</label>
        <input
          type='text'
          placeholder='Zeit'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Entfernung</label>
        <div className='form-control-flex'>
          <input
            type='text'
            placeholder='Entfernung'
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
          <select onChange={(e) => setEinheit(e.target.value)}>
            <option value="km">km</option>
            <option value="m">m</option>
            <option value="mi">mi</option>
          </select>
        </div>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
