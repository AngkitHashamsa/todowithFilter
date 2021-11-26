import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from './context'
const Form = () => {
  const {
    startDate,
    setStartDate,
    data,
    setData,
    completed,
    setComplete,
    handleSubmit,
  } = useGlobalContext()

  return (
    <div className='shadow-lg rounded-lg p-4 border'>
      <form
        className='md:flex md:items-center md:justify-center'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='border flex-1 focus:outline-none p-2 w-full border-gray-700 rounded-lg'
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <div className='flex items-center justify-between md:ml-3 my-4 '>
          <div className='flex items-center'>
            <label htmlFor='date'>date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              type='date'
              className='border-2 w-1/3 ml-0'
              id='date'
            />
          </div>

          <div className='md:mr-3'>
            <label htmlFor='completed'>completed</label>
            <input
              id='completed'
              type='checkbox'
              className='ml-2'
              checked={completed}
              onChange={() => setComplete(!completed)}
            />
          </div>
        </div>
        <button
          type='submit'
          className='py-1 px-3 md:w-1/12 rounded-lg bg-blue-400 text-white w-full '
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default Form
