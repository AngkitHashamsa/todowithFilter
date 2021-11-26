import Form from './Form'
import Table from './Table'
import { useGlobalContext } from './context'
function App() {
  const { handleFilter, filtered, removeItem } = useGlobalContext()
  return (
    <main className='min-h-full'>
      <div className='section-center mt-20 pt-20 text-center'>
        <Form />
        {filtered.length > 0 && (
          <div className='mt-8 w-full flex justify-between '>
            <section>
              <label htmlFor='filter'>filter: </label>
              <select
                name='filter'
                id='filter'
                onClick={handleFilter}
                className='border-2'
              >
                <option value='all'>all</option>
                <option value='incomplete'>incomplete</option>
                <option value='completed'>completed</option>
              </select>
            </section>
            <section>
              <button
                className='bg-red-500 text-white px-3 py-1'
                onClick={removeItem}
              >
                remove
              </button>
            </section>
          </div>
        )}
        {filtered.length > 0 && <Table />}
      </div>
    </main>
  )
}

export default App
