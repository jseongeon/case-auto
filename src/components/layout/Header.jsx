import { useState, useEffect } from 'react'
import { FileText } from 'lucide-react'
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

  // Vite 프로덕션 빌드에서 정적 에셋 경로 처리를 위함
  const pdfUrl = import.meta.env.BASE_URL + '업무사례_자동화_시스템.pdf'

  return (
    <header className={`${styles.header} ${dark ? styles.dark : ''}`}>
      <div className={styles.logo}>
        업무사례 <span>자동화 시스템</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
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
        <button
          onClick={() => window.open(pdfUrl, '_blank', 'width=1000,height=800')}
          className={styles.pdfBtn}
          style={{ cursor: 'pointer' }}
        >
          <FileText size={16} />
          <span>PDF 보기</span>
        </button>
      </div>
    </header>
  )
}

export default Header
