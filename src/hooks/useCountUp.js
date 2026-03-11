// hooks/useCountUp.js
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!start) return
    let current = 0
    const step = 16
    const increment = target / (duration / step)
    timerRef.current = setInterval(() => {
      current = Math.min(current + increment, target)
      setCount(Math.round(current))
      if (current >= target) clearInterval(timerRef.current)
    }, step)
    return () => clearInterval(timerRef.current)
  }, [target, duration, start])

  return count
}
