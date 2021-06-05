import { useState } from 'react'

// hook from https://usehooks.com/useLocalStorage/

let values = []

function useLocalStorage(key, initialValue) {
  
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // if no item: return initialValue
      // else: return item
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    values.push(value)
    try {
      setStoredValue(values)
      window.localStorage.setItem(key, JSON.stringify(values))
    } catch (error) {
      console.log(error)
    }
  }

  const clearValues = () => {
    try {
      values = []
      setStoredValue(values)
      window.localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, clearValues]
}

export default useLocalStorage