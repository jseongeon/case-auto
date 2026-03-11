import { useState, useEffect } from 'react'
import { NAV_SECTIONS } from '../../data/content'
import styles from './SideNav.module.css'

const SideNav = () => {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = []
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={styles.nav}>
      {NAV_SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`${styles.dot} ${active === id ? styles.active : ''}`}
          onClick={() => scrollTo(id)}
          data-label={label}
          aria-label={label}
        />
      ))}
    </nav>
  )
}

export default SideNav
