import { useEffect, useState } from 'react'

export function UseDebounce(value, timeout, callback) {
  const [timer, setTimer] = useState(null)

  const clearTimer = () => {
    if (timer) clearTimeout(timer)
  }

  useEffect(() => {
    clearTimer()
    if (value && callback) {
      const newTimer = setTimeout(callback, timeout)
      setTimer(newTimer)
    }
  }, [value])
}
