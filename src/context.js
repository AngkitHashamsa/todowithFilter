import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const getLocalStorage = () => {
  let local = localStorage.getItem('todo')
  return local ? JSON.parse(localStorage.getItem('todo')) : []
}

export const AppProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [data, setData] = useState('')
  const [completed, setComplete] = useState(false)
  const [todo, setTodo] = useState(getLocalStorage())
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

      setData('')
      setComplete(false)
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

  const removeItem = () => {
    setTodo([])
  }

  useEffect(() => {
    setFiltered([...todo])
  }, [todo])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
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
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
