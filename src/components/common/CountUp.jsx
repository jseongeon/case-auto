import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'
import styles from './CountUp.module.css'

const CountUp = ({ target, suffix = '', label }) => {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)
  const count = useCountUp(target, 1800, started)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={styles.wrap} ref={ref}>
      <span className={styles.number}>{count}</span>
      <span className={styles.suffix}>{suffix}</span>
      {label && <p className={styles.label}>{label}</p>}
    </div>
  )
}

export default CountUp
