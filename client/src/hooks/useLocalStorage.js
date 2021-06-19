import { useState } from 'react'

// hook from https://usehooks.com/useLocalStorage/
function useLocalStorage(key, initialValue) {
  
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      // if no cards added yet, example cards are shown
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  const clearValues = () => {
    try {
      setStoredValue([])
      window.localStorage.removeItem(key)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue, clearValues]
}

export default useLocalStorage