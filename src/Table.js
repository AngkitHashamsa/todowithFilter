import React from 'react'
import moment from 'moment'
import { useGlobalContext } from './context'
const Table = () => {
  const { todo, filterItem } = useGlobalContext()
  const dummy = [
    { completed: true, data: 'asdsa', id: '1637931440324' },
    { completed: false, data: 'asdasd', id: '16379315199' },
    { completed: false, data: 'asdasdasdasdasd', id: '16' },
    { completed: false, data: 'asdasdasdasdasd', id: '16' },
  ]

  return (
    <div className='mt-12 mx-auto grid grid-cols-1 justify-center mb-20'>
      <table className='text-center border-2 w-full'>
        <thead className='border-2'>
          <tr className='p4'>
            <th>Todo</th>
            <th>Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {filterItem.map((item) => {
            const { id, data, startDate, completed } = item

            return (
              <tr key={id} className='border-2 '>
                <td className='p-3 border-2'>{data}</td>
                <td>{moment(startDate).format('MMMM d, YYYY')}</td>
                <td className='p-3 border-2'>
                  {completed ? 'completed' : 'incomplete'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
