import Form from './Form'
import Table from './Table'
import { useGlobalContext } from './context'
function App() {
  const { handleFilter, filtered } = useGlobalContext()
  return (
    <main className='min-h-full'>
      <div className='section-center mt-20 pt-20 text-center'>
        <Form />
        <div className='mt-8 w-full'>
          <select name='filter' id='filter' onClick={handleFilter}>
            <option value='all'>all</option>
            <option value='incomplete'>incomplete</option>
            <option value='completed'>completed</option>
          </select>
        </div>

        {filtered.length > 0 && <Table />}
      </div>
    </main>
  )
}

export default App
