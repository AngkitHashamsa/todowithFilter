import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [data, setData] = useState('')
  const [completed, setComplete] = useState(false)
  const [todo, setTodo] = useState([])
  const [filtered, setFiltered] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data && startDate) {
      const newTodo = {
        id: new Date().getTime().toString(),
        data,
        startDate,
        completed,
      }
      setTodo([...todo, newTodo])

      setStartDate(new Date())
      setComplete(false)
      setData('')
    } else {
      alert('please enter all the value')
    }
  }

  const handleFilter = (e) => {
    let value = e.target.value

    if (value === 'all') {
      setFiltered([...todo])
    }
    if (value === 'completed') {
      setFiltered([...todo].filter((item) => item.completed === true))
    }
    if (value === 'incomplete') {
      setFiltered([...todo].filter((item) => item.completed === false))
    }
  }
  useEffect(() => {
    setFiltered([...todo])
  }, [todo])
  return (
    <AppContext.Provider
      value={{
        startDate,
        setStartDate,
        data,
        setData,
        completed,
        setComplete,
        handleSubmit,
        todo,
        handleFilter,
        filtered,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
