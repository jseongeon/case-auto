import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { label: '문제', target: 'problem' },
  { label: '시스템 흐름', target: 'flow' },
  { label: '효과', target: 'effect' },
  { label: '기술 스택', target: 'tech' },
]

const Header = () => {
  const [dark, setDark] = useState(true)
  const [activeNav, setActiveNav] = useState('')

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const obs = new IntersectionObserver(([e]) => setDark(e.isIntersecting), { threshold: 0.1 })
    obs.observe(hero)
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveNav(id)
  }

  return (
    <header className={`${styles.header} ${dark ? styles.dark : ''}`}>
      <div className={styles.logo}>
        업무사례 <span>자동화 시스템</span>
      </div>
      <nav className={styles.nav}>
        {NAV_ITEMS.map(({ label, target }) => (
          <button
            key={target}
            className={`${styles.navLink} ${activeNav === target ? styles.active : ''}`}
            onClick={() => scrollTo(target)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
